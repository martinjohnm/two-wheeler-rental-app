

import express from "express"
import { protectUseRoute } from "../../middlewares/user/protectUserRoute";
import { cancel_booking, create_booking, get_booking_bulk, get_booking_by_id } from "../../controllers/user/bookingController";

const router = express.Router();

router.post("/create",protectUseRoute ,create_booking)
router.get("/get-bulk",protectUseRoute ,get_booking_bulk)
router.get("/get/:id", protectUseRoute, get_booking_by_id)
router.post("/cancel/:id",protectUseRoute, cancel_booking)
router.get("/delete",protectUseRoute ,)


export default router;