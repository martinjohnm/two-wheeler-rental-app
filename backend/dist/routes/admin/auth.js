"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminAuthController_1 = require("../../controllers/admin/adminAuthController");
const protectAdminRoute_1 = require("../../middlewares/admin/protectAdminRoute");
const router = express_1.default.Router();
router.post("/signup", adminAuthController_1.signup);
router.post("/login", adminAuthController_1.login);
router.post("/logout", protectAdminRoute_1.protectAdminRoute, adminAuthController_1.logout);
exports.default = router;
