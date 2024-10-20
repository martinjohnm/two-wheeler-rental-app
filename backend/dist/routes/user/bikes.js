"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bikesController_1 = require("../../controllers/user/bikesController");
const router = express_1.default.Router();
router.get("/get-bikes", bikesController_1.get_bikes);
router.get("/get-bike/:id", bikesController_1.get_bike);
router.get("/get-companies", bikesController_1.get_comapanies);
router.post("/get-bikes-by-filter", bikesController_1.get_bikes_by_filter);
// router.post("/get-bikes-by-date_range", get_bikes_by_date_range)
router.get("/get-bikes-by-date", bikesController_1.get_bikes_by_date_range_by_params);
router.get("/get-single-bike-by-date/:id", bikesController_1.get_single_bike_by_date);
exports.default = router;
