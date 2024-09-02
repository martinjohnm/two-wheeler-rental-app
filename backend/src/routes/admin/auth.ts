

import express, { Request, Response } from "express"
import { login, logout, signup } from "../../controllers/admin/adminAuthController";
import { protectAdminRoute } from "../../middlewares/admin/protectAdminRoute";

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout",protectAdminRoute, logout)


export default router;