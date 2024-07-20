
import express from 'express'
import { login, logout, createUser, getProfile, updateProfile } from "../controllers/userController.js";
import { checkToken } from "../middleware/authMiddleware.js";

const router = express.Router()

router.post("/", createUser) // - from userRouter.js file go to userController.js createUser method
router.post("/login", login)
router.get("/profile", checkToken, getProfile);
router.put("/profile", checkToken, updateProfile);
router.post("/logout", logout)

export default router;