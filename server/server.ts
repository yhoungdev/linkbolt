import express from "express";
import auth_router from "./routers/auth_route";
import user_actions_route from "./routers/user_actions_route";
import profile_router from "./routers/profile";
const crypto = require("crypto");
const express_session = require("express-session");
const cors = require("cors");
const passport = require("passport");
import { Request, Response } from 'express';
import { StatusCode } from "./enums/staus_code";

const app = express();
const PORT = process.env.PORT || 3000;

const cypherKey = crypto.randomBytes(32).toString("hex");

app.use(
	cors({
		origin: "*",
		method: "GET, POST , PUT, DELET, PATCH",
		credential: true,
	})
);

app.use(express.json());

app.use(
	express_session({
		secret: cypherKey,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 24 * 60 * 60 * 1000
		  },
	})
);


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
	const serializedUser = {
		id: user.id,
		expiresAt: Date.now() + 24 * 60 * 60 * 1000
	};
	done(null, serializedUser);
});

passport.deserializeUser((serializedUser: any, done: any) => {
	if (serializedUser.expiresAt < Date.now()) {
		done(null, null);
	} else {
		done(null, { id: serializedUser.id });
		console.log("stilll time");
	}
});

app.use("/api", auth_router);
app.use("/api", user_actions_route);
app.use("/api", profile_router);




app.get("/", (req, res) => {
	res.send(`viewing on port ${PORT}`);
});


app.get("/google/failed", (req, res) => {
	res.status(StatusCode.Forbidden).json({"error": " Authentication Failed"})
})



process.env.DEBUG = "passport:* node server.js";

app.listen(PORT, () => {});
