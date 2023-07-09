import express from "express";
import { login, signup } from "../controller/auth_controller";
const passport = require("passport")
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

router.get("/google" , passport.authenticate('google'))

const auth_router = router;

export default auth_router;
