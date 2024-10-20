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
exports.cancel_booking = exports.get_bookings_by_user = exports.get_booking_by_id = exports.get_booking_bulk = void 0;
const db_1 = __importDefault(require("../../db"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken_1 = require("../../utils/cookie/jwt-token-generater/generateToken");
const jwt_secret = process.env.JWT_SECRET || "";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY) || "";
// Bookings admin controller
const get_booking_bulk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bike = yield db_1.default.booking.findMany({
            include: {
                user: true,
                bike: {
                    include: {
                        company: true,
                        location: true
                    }
                },
            }
        });
        if (!bike) {
            return res.status(400).json({
                success: false,
                error: "No Bookings yet"
            });
        }
        return res.status(200).json({
            data: bike,
            success: true,
            message: "Bookings fetched successfully!"
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
exports.get_booking_bulk = get_booking_bulk;
const get_booking_by_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const bike = yield db_1.default.booking.findFirst({
            where: {
                id
            },
            include: {
                user: true,
                bike: true
            }
        });
        if (!bike) {
            return res.status(400).json({
                success: false,
                error: "No such Booking"
            });
        }
        return res.status(200).json({
            data: bike,
            success: true,
            message: "Booking fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during getting single Booking", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_booking_by_id = get_booking_by_id;
const get_bookings_by_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userId = null;
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
            userId = user === null || user === void 0 ? void 0 : user.id;
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
        const bookings = yield db_1.default.booking.findMany({
            where: {
                userId: Number(userId)
            },
            include: {
                user: true,
                bike: true
            }
        });
        if (!bookings) {
            return res.status(400).json({
                success: false,
                message: "No Bookings yet"
            });
        }
        return res.status(200).json({
            data: bookings,
            success: true,
            message: "Bookings fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during getting single Booking", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_bookings_by_user = get_bookings_by_user;
const cancel_booking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const existingBooking = yield db_1.default.booking.findFirst({
            where: {
                id,
                status: "CANCELLED"
            }
        });
        if (existingBooking) {
            return res.status(400).json({
                success: false,
                message: "Booking already cancelled"
            });
        }
        const booking = yield db_1.default.booking.update({
            where: {
                id
            },
            data: {
                status: "CANCELLED"
            }
        });
        if (!booking) {
            return res.status(400).json({
                success: false,
                message: "No such Booking"
            });
        }
        return res.status(200).json({
            data: booking,
            success: true,
            message: "Booking cancelled successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during getting single Booking", message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
exports.cancel_booking = cancel_booking;
