

import express from "express"
import { protectUseRoute } from "../../middlewares/user/protectUserRoute";
import { cancel_booking, create_booking, create_booking_intent, get_booking_bulk, get_booking_by_id, get_bookings_by_user } from "../../controllers/user/bookingController";

const router = express.Router();

router.post("/create",protectUseRoute ,create_booking)
router.post("/create-booking-intent",protectUseRoute ,create_booking_intent)
router.get("/get-bulk",protectUseRoute ,get_booking_bulk)
router.get("/get/:id", protectUseRoute, get_booking_by_id)
router.get("/get-by-user", protectUseRoute, get_bookings_by_user)
router.post("/cancel",protectUseRoute, cancel_booking)
router.get("/delete",protectUseRoute ,)


export default router;