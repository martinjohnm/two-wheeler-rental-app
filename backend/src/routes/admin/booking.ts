
import express from "express"
import { create_location, get_all_locations } from "../../controllers/admin/locationController";
import { protectAdminRoute } from "../../middlewares/admin/protectAdminRoute";
import { get_booking_bulk } from "../../controllers/admin/bookingsController";


const router = express.Router();


router.get("/get-bookings", protectAdminRoute,get_booking_bulk)
router.get("/get-locations", get_all_locations)


export default router