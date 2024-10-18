



import express from "express"
import { protectAdminRoute } from "../../middlewares/admin/protectAdminRoute";
import { all_users_for_admin } from "../../controllers/admin/adminUserController";


const router = express.Router();


router.get("/all", protectAdminRoute, all_users_for_admin)

export default router