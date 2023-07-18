// import { StatusCode } from "../enums/staus_code";
// import { PrismaClient } from "@prisma/client";
// import { Request , Response } from "express";

// const prisma  = new PrismaClient();

// export const addUser = async (req: Request, res: Response) => {

//     //@ts-ignore
// 	const profile = req?.user;
// 	try {
// 		const existed = await prisma.user.findUnique({
// 			where: {
// 				sub: profile?._json?.sub,
// 			},
// 		});

// 		if (!existed) {
// 			const user = await prisma.user.create({
// 				data: {
// 					...profile?._json,
// 				},
// 			});

// 			if (user) {
// 				return res.status(StatusCode.OK).json({
// 					message: "User created successfully",
// 					data: profile,
// 				});
// 			} else {
// 				return res
// 					.status(StatusCode.Forbidden)
// 					.json({ error: "Something went wrong" });
// 			}
// 		} else {
// 			return res
// 			.status(StatusCode.OK)
// 			.json({ message: `Welcome back ${profile?._json?.name}`, data: profile?._json });
// 		}

// 	} catch (err) {
// 		return res.status(StatusCode.InternalServerError).json({error: "Internal Server Error"})
// 	}

// }
import { Request, Response } from "express";
import { StatusCode } from "../enums/staus_code";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addUser = async (req: Request, res: Response) => {
	//@ts-ignore
	const profile = req.user;
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
			return res.status(StatusCode.OK).json({
				message: `Welcome back ${profile?._json?.name}`,
				data: profile?._json,
			});
		}
	} catch (err) {
		return res
			.status(StatusCode.InternalServerError)
			.json({ error: "Internal Server Error" });
	}
};
