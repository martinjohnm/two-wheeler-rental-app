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
exports.logout = exports.login = exports.signup = void 0;
const db_1 = __importDefault(require("../../db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const rebike_common_1 = require("@martinjohnm/rebike-common");
const generateToken_1 = require("../../utils/cookie/jwt-token-generater/generateToken");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = rebike_common_1.userSignupinput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error: response.error,
                success: false,
                message: "admin Creation failed"
            });
            return;
        }
        const { password, confirmPassword, email, fullName } = body;
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                error: "Passwords don't match"
            });
        }
        const existingUser = yield db_1.default.user.findFirst({
            where: {
                email
            }
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: "Username already registered"
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield db_1.default.user.create({
            data: {
                email,
                fullName,
                password: hashedPassword,
                isAdmin: true
            }
        });
        const token = (0, generateToken_1.generateTokenAndSetCookieAdmin)(String(newUser.id), res);
        res.status(200).json({
            data: {
                id: newUser.id,
                fullName: newUser.fullName,
                email: newUser.email,
                token
            },
            success: true,
            message: "User created successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during signup", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = rebike_common_1.userLoginInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error: response.error,
                success: false,
                message: "Login failed"
            });
            return;
        }
        const { email, password } = body;
        const user = yield db_1.default.user.findFirst({
            where: {
                email
            }
        });
        if (!(user === null || user === void 0 ? void 0 : user.isAdmin)) {
            return res.status(400).json({
                success: false,
                message: "Only admin can login"
            });
        }
        const isPasswordCorrect = yield bcrypt_1.default.compare(password, (user === null || user === void 0 ? void 0 : user.password) || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        const token = (0, generateToken_1.generateTokenAndSetCookieAdmin)(String(user.id), res);
        res.status(200).json({
            success: true,
            message: "Admin Login successful!",
            data: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                token
            }
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during login", message);
        res.status(500).json({
            error: "Internal server error",
            success: false
        });
    }
});
exports.login = login;
const logout = (req, res) => {
    try {
        res.clearCookie(generateToken_1.JWT_COOKIE_TOKEN_ADMIN);
        res.status(200).json({ message: "Admin Logged out successfully",
            success: true,
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during admin logout", message);
        res.status(500).json({
            error: "Internal server error",
            success: false
        });
    }
};
exports.logout = logout;
