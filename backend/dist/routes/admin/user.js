"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const protectAdminRoute_1 = require("../../middlewares/admin/protectAdminRoute");
const adminUserController_1 = require("../../controllers/admin/adminUserController");
const router = express_1.default.Router();
router.get("/all", protectAdminRoute_1.protectAdminRoute, adminUserController_1.all_users_for_admin);
exports.default = router;
