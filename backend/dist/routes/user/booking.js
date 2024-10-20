"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const protectUserRoute_1 = require("../../middlewares/user/protectUserRoute");
const bookingController_1 = require("../../controllers/user/bookingController");
const router = express_1.default.Router();
router.post("/create", protectUserRoute_1.protectUseRoute, bookingController_1.create_booking);
router.post("/create-booking-intent", protectUserRoute_1.protectUseRoute, bookingController_1.create_booking_intent);
router.get("/get-bulk", protectUserRoute_1.protectUseRoute, bookingController_1.get_booking_bulk);
router.get("/get/:id", protectUserRoute_1.protectUseRoute, bookingController_1.get_booking_by_id);
router.get("/get-by-user", protectUserRoute_1.protectUseRoute, bookingController_1.get_bookings_by_user);
router.post("/cancel", protectUserRoute_1.protectUseRoute, bookingController_1.cancel_booking);
router.get("/delete", protectUserRoute_1.protectUseRoute);
exports.default = router;
