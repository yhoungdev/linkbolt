import express, { Response, Request } from "express";
import { login, signup } from "../controller/auth_controller";
import { PrismaClient } from "@prisma/client";
import { StatusCode } from "../enums/staus_code";
import path from "path";
const passport = require("../config/passport_setup");

const router = express.Router();
const app = express();
const prisma = new PrismaClient();

router.post("/login", login);
router.post("/signup", signup);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
	"/google/login",
	passport.authenticate("google", {
		failureRedirect: "/",
		successRedirect: "/api/profile",
		failureFlash: true,
		successFlash: "Successfully logged in!",
	})
);

const auth_router = router;
export default auth_router;
