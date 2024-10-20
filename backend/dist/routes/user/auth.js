"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../../controllers/user/authController");
const protectUserRoute_1 = require("../../middlewares/user/protectUserRoute");
const router = express_1.default.Router();
router.post("/signup", authController_1.signup);
router.post("/login", authController_1.login);
router.post("/logout", protectUserRoute_1.protectUseRoute, authController_1.logout);
router.get("/current-user", protectUserRoute_1.protectUseRoute, authController_1.current_user);
exports.default = router;
