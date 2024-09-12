

import express from "express"
import { protectUseRoute } from "../../middlewares/user/protectUserRoute";
import { create_booking, get_booking } from "../../controllers/user/bookingController";

const router = express.Router();

router.post("/create",protectUseRoute ,create_booking)
router.get("/get-bulk",protectUseRoute ,get_booking)


export default router;