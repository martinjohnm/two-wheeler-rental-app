

import express from "express"
import { get_bike, get_bikes, get_bikes_by_date_range, get_bikes_by_date_range_by_params, get_bikes_by_filter, get_comapanies, get_single_bike_by_date } from "../../controllers/user/bikesController";

const router = express.Router();

router.get("/get-bikes", get_bikes)
router.get("/get-bike/:id", get_bike)
router.get("/get-companies", get_comapanies)
router.post("/get-bikes-by-filter", get_bikes_by_filter)
// router.post("/get-bikes-by-date_range", get_bikes_by_date_range)
router.get("/get-bikes-by-date", get_bikes_by_date_range_by_params)
router.get("/get-single-bike-by-date/:id", get_single_bike_by_date)

export default router;