import express, { Response, Request } from "express";
import { login, signup } from "../controller/auth_controller";
import { Prisma, PrismaClient } from "@prisma/client";
import { StatusCode } from "../enums/staus_code";
const passport = require("../config/passport_setup");

const router = express.Router();
const prisma = new PrismaClient();

router.post("/login", login);
router.post("/signup", signup);

router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
	"/google/login",
	passport.authenticate("google"),

	async (req: Request, res: Response) => {
		//@ts-ignore
		const profile = req?.user;
		try {
			const existed = await prisma.user.findUnique({
				where: {
					sub: profile?._json?.sub,
				},
			});

			if (!existed) {
				const user = await prisma.user.create({
					data: {
						...profile?._json,
					},
				});

				if (user) {
					return res.status(StatusCode.OK).json({
						message: "User created successfully",
						data: profile,
					});
				} else {
					return res
						.status(StatusCode.Forbidden)
						.json({ error: "Something went wrong" });
				}
			} else {
				return res
				.status(StatusCode.OK)
				.json({ message: `Welcome back ${profile?._json?.name}`, data: profile?._json });
			}

			
		} catch (err) {
			return res.status(StatusCode.InternalServerError).json({error: "Internal Server Error"})
		}
	}
);

const auth_router = router;
export default auth_router;
