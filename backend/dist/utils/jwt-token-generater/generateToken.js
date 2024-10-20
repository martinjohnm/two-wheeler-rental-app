"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenAndSetCookieAdmin = exports.generateTokenAndSetCookie = exports.JWT_COOKIE_TOKEN_ADMIN = exports.JWT_COOKIE_TOKEN = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jwt_secret = process.env.JWT_SECRET || "";
const node_env = process.env.NODE_ENV || "";
exports.JWT_COOKIE_TOKEN = "twowheelerapp-user-cookie";
exports.JWT_COOKIE_TOKEN_ADMIN = "twowheelerapp-admin-cookie";
const generateTokenAndSetCookie = (userId, res) => {
    const token = jsonwebtoken_1.default.sign({ userId }, jwt_secret, {
        expiresIn: "15d"
    });
    res.cookie(exports.JWT_COOKIE_TOKEN, "Bearer " + token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks cross site  scripting 
        sameSite: "lax", // CSRF attacks
        secure: node_env !== "development",
    });
    return token;
};
exports.generateTokenAndSetCookie = generateTokenAndSetCookie;
const generateTokenAndSetCookieAdmin = (adminId, res) => {
    const token = jsonwebtoken_1.default.sign({ adminId }, jwt_secret, {
        expiresIn: "15d"
    });
    res.cookie(exports.JWT_COOKIE_TOKEN_ADMIN, "Bearer " + token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks cross site  scripting 
        sameSite: "strict", // CSRF attacks
        secure: node_env !== "development",
    });
    return token;
};
exports.generateTokenAndSetCookieAdmin = generateTokenAndSetCookieAdmin;
