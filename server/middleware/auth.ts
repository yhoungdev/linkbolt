import { Response, Request, NextFunction } from "express";
import { StatusCode } from "../enums/staus_code";
const jwt = require("jsonwebtoken");

export const authenticate = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers.authorization?.split(" ")[1];

	try {
		const decodeToken = jwt.verify(token, process.env.JWT_KEY) as {
			id: string;
		};
		//@ts-ignore
		req?.id = decodeToken.id;
		next();
	} catch (err) {
		return res
			.status(StatusCode.Unauthorized)
			.send("Unauthorized, token is required");
	}
};
