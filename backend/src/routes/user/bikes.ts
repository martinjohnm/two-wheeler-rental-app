

import express, { Request, Response } from "express"
import { get_bike, get_bikes, get_bikes_by_filter, get_comapanies } from "../../controllers/user/bikesController";

const router = express.Router();

router.get("/get-bikes", get_bikes)
router.get("/get-bike/:id", get_bike)
router.get("/get-companies", get_comapanies)
router.post("/get-bikes-by-filter", get_bikes_by_filter)


export default router;