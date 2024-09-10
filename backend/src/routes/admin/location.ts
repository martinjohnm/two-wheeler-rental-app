
import express from "express"
import { create_location, get_all_locations } from "../../controllers/admin/locationController";
import { protectAdminRoute } from "../../middlewares/admin/protectAdminRoute";


const router = express.Router();


router.post("/create-location", protectAdminRoute,create_location)
router.get("/get-locations", get_all_locations)


export default router