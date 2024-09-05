

import express, { Request, Response } from "express"
import { protectAdminRoute } from "../../middlewares/admin/protectAdminRoute";
import { add_bike, add_company, delete_bike, delete_company, get_bike, update_bike } from "../../controllers/admin/bikesController";

const router = express.Router();

// Individual CRUD operation

// BIKE
router.get("/get-bike/:id", get_bike)
router.post("/add-bike",protectAdminRoute, add_bike)
router.put("/update-bike/:id",protectAdminRoute, update_bike)
router.delete("/delete-bike/:id",protectAdminRoute, delete_bike)
// COMPANY
router.post("/add-company",protectAdminRoute, add_company)
router.delete("/delete-company/:id",protectAdminRoute, delete_company)


// Bulk CRUD Operation

// BIKES
router.post("/add-bikes",protectAdminRoute, add_bike)
router.put("/update-bikes",protectAdminRoute, update_bike)
router.delete("/delete-bikes",protectAdminRoute, delete_bike)


export default router;