import express from "express";
import { login, signup } from "../controller/auth_controller";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

const auth_router = router;

export default auth_router;
