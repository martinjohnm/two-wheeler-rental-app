

import express, { Request, Response } from "express"
import { current_user, login, logout, signup } from "../../controllers/user/authController";
import { protectUseRoute } from "../../middlewares/user/protectUserRoute";

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout",protectUseRoute, logout)
router.get("/current-user",protectUseRoute, current_user)


export default router;