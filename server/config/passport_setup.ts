const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const dotenv = require("dotenv").config();
// import { addUser } from "../controller/user";

// const auth_user = (
// 	request: Request,
// 	accessToken: string,
// 	refreshToken: string,
// 	profile: any,
// 	done: any
// ) => {

// 	//return done(null, profile);
// };

// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 			callbackURL: "/api/google/login",
// 			passReqToCallback: true,
// 			session: true,
// 			failureRedirect: '/google/failed',
// 			successReturnToOrRedirect: '/'
// 		},
// 		auth_user
// 	)
// );

// module.exports = passport;
// import { Request, Response } from 'express';
// import { addUser } from '../controller/user';

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const dotenv = require('dotenv').config();

// const auth_user = async (
//   request: Request,
//   accessToken: string,
//   refreshToken: string,
//   profile: any,
//   done: any
// ) => {
//   // Call the addUser function here
//   addUser(request, {
// 	//@ts-ignore
//     status: (statusCode: number) => {
//       return {
//         json: (response: object) => {
//           done(null, response); // Call done with the response
//         },
//       };
//     },
//   });
// };

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: '/api/google/login',
//       passReqToCallback: true,
//       session: true,
//       failureRedirect: '/google/failed',
//       successReturnToOrRedirect: '/',
//     },
//     auth_user
//   )
// );

// module.exports = passport;
import { Request, Response } from "express";
import { addUser } from "../controller/user";
import { StatusCode } from "../enums/staus_code";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const auth_user = async (
	request: Request,
	accessToken: string,
	refreshToken: string,
	profile: any,
	done: any
) => {
	const userSub = profile?._json?.sub;
	try {
		const existed = await prisma.user.findUnique({
			where: {
				sub: userSub,
			},
		});

		if (!existed) {
			const user = await prisma.user.create({
				data: {
					...profile?._json,
				},
			});

			if (user) {
				return done(null, {
					message: "User created successfully",
					data: profile,
				});
			} else {
				return done(null, {
					error: "Something went wrong",
				});
			}
		} else {

			done(null, profile)
			// return done(null, {
			// 	message: `Welcome back ${profile?._json?.name}`,
			// 	data: profile?._json,
			// });
		}
	} catch (err) {
		return done(err);
	}
};

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/api/google/login",
			passReqToCallback: true,
			session: true,
			failureRedirect: "/google/failed",
			successReturnToOrRedirect: "/",
		},
		auth_user
	)
);

module.exports = passport;
