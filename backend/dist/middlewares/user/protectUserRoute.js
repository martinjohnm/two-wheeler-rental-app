"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectUseRoute = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken_1 = require("../../utils/cookie/jwt-token-generater/generateToken");
const db_1 = __importDefault(require("../../db"));
const jwt_secret = process.env.JWT_SECRET || "";
const protectUseRoute = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        try {
            const bearertoken = req.cookies[generateToken_1.JWT_COOKIE_TOKEN];
            const token = bearertoken.split(" ")[1];
        }
        catch (error) {
            let message;
            if (error instanceof Error)
                message = error.message;
            else
                message = String(error);
            return res.json({
                error: "You are not logged In",
                success: false,
                message: "You are not logged In"
            });
        }
        const bearertoken = req.cookies[generateToken_1.JWT_COOKIE_TOKEN];
        const token = bearertoken.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, jwt_secret);
        if (!decoded) {
            return res.status(401).json({
                error: "Unauthorized - Invalid Token",
                success: false
            });
        }
        const user = yield db_1.default.user.findFirst({
            where: {
                id: Number(decoded.userId)
            }
        });
        if (!user) {
            return res.status(404).json({
                error: "User not found",
                success: false
            });
        }
        next();
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        res.status(500).json({
            error: "Internal server error",
            success: false
        });
    }
});
exports.protectUseRoute = protectUseRoute;
