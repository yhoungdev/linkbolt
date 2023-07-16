import express from "express";
import auth_router from "./routers/auth_route";
import user_actions_route from "./routers/user_actions_route";
const crypto = require("crypto");
const express_session = require("express-session");
const cors = require("cors");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3000;

const cypherKey = crypto.randomBytes(32).toString("hex");

app.use(cors({
	origin: '*',
	method: 'GET, POST , PUT, DELET, PATCH',
	credential: true
}));


app.use(express.json());

app.use(
	express_session({
		secret: cypherKey,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 60 * 1000
		  },
	})
);

passport.serializeUser((user: any, done: any) => {
	
	done(null, user.id);
});

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
	const serializedUser = {
		id: user.id,
		expiresAt: Date.now() + 60 * 2000, 
	  };
	  done(null, serializedUser);
});



passport.deserializeUser((serializedUser: any, done: any) => {

	if (serializedUser.expiresAt < Date.now()) {
		done(null, null);
	  } else {
		done(null, { id: serializedUser.id });
		console.log('stilll time')
	  }

});

app.use("/api", auth_router);
app.use("/api", user_actions_route);

app.get("/", (req, res) => {
	res.send(`viewing on port ${PORT}`);
});

process.env.DEBUG = "passport:* node server.js"



app.listen(PORT, () => {});
