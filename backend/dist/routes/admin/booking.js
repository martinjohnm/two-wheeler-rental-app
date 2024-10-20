"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const locationController_1 = require("../../controllers/admin/locationController");
const protectAdminRoute_1 = require("../../middlewares/admin/protectAdminRoute");
const bookingsController_1 = require("../../controllers/admin/bookingsController");
const router = express_1.default.Router();
router.get("/get-bookings", protectAdminRoute_1.protectAdminRoute, bookingsController_1.get_booking_bulk);
router.get("/get-locations", locationController_1.get_all_locations);
exports.default = router;
