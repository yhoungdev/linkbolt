import express from "express";
import auth_router from "./routers/auth_route";
import user_actions_route from "./routers/user_actions_route";
const crypto = require('crypto')
const express_session = require('express-session')
const cors = require('cors')
const passport = require("passport");



const app = express();
const PORT = process.env.PORT || 3000;

const cypherKey = crypto.randomBytes(32).toString("hex");

app.use(cors());
app.use(express.json());
app.use(express_session({
	secret: cypherKey , // Replace with your own secret key
	resave: false,
	saveUninitialized: false,
}))

passport.serializeUser((user: any, done:any) => {
	// Store only the user ID in the session
	done(null, user.id);
  });

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", auth_router);
app.use("/api", user_actions_route);


app.get("/", (req, res) => {
	res.send(`viewing on port ${PORT}`);
});

process.env.DEBUG = 'passport:*';

app.listen(PORT, () => {
	
});
