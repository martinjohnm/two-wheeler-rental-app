
import express from "express"


import { get_all_locations } from "../../controllers/admin/locationController";

const router = express.Router();


router.get("/get-locations", get_all_locations)


export default router