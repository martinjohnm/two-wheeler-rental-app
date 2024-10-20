"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const protectAdminRoute_1 = require("../../middlewares/admin/protectAdminRoute");
const bikesController_1 = require("../../controllers/admin/bikesController");
const router = express_1.default.Router();
// Individual CRUD operation
// BIKE
router.get("/get-bike/:id", bikesController_1.get_bike);
router.post("/add-bike", protectAdminRoute_1.protectAdminRoute, bikesController_1.add_bike);
router.put("/update-bike/:id", protectAdminRoute_1.protectAdminRoute, bikesController_1.update_bike);
router.delete("/delete-bike/:id", protectAdminRoute_1.protectAdminRoute, bikesController_1.delete_bike);
// COMPANY
router.post("/add-company", protectAdminRoute_1.protectAdminRoute, bikesController_1.add_company);
router.delete("/delete-company/:id", protectAdminRoute_1.protectAdminRoute, bikesController_1.delete_company);
// Bulk CRUD Operation
// BIKES
router.post("/add-bikes", protectAdminRoute_1.protectAdminRoute, bikesController_1.add_bike);
router.put("/update-bikes", protectAdminRoute_1.protectAdminRoute, bikesController_1.update_bike);
router.delete("/delete-bikes", protectAdminRoute_1.protectAdminRoute, bikesController_1.delete_bike);
exports.default = router;
