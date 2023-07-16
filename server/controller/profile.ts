import { Request, Response } from "express";
import { StatusCode } from "../enums/staus_code";
import { PrismaClient } from "@prisma/client";
const crypto = require("crypto");

const jwt = require('jsonwebtoken');
const prisma = new PrismaClient(); 



const get_profile = async  (req: Request, res: Response) => {
	///@ts-ignore
	//check if passport item is in session
	const reqSession = req?.session;

	if (reqSession && reqSession?.passport) {
		const userId = reqSession.passport?.user?.id
		const fetchProfile = await prisma.user.findUnique({
			where: {
				sub: userId
			}
		});

		if ( fetchProfile ) {
			res.status(StatusCode.Found).json({
				message: 'Profile retrived', 
				data: fetchProfile
			})
		}

		else {
			res.status(StatusCode.NotFound).send("User not found")
		}
		
		
	} else {
		res.status(StatusCode.Unauthorized).json({ error: "Unauthenticated" });
	}
};

export { get_profile };
