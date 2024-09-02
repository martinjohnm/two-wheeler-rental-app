

import express, { Request, Response } from "express"
import { login, logout, signup } from "../../controllers/user/authController";
import { protectUseRoute } from "../../middlewares/user/protectUserRoute";

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout",protectUseRoute, logout)


export default router;