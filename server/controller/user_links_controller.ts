import express, { Request, Response } from "express";
import * as Yup from "yup";
import { StatusCode } from "../enums/staus_code";
import { url } from "inspector";

const router = express.Router();

const validation_schema = Yup.object().shape({
	url: Yup.string().required().url(),
});

export const save_user_link = async (req: Request, res: Response) => {
	const body = req.body;
	try {
		const checks = await validation_schema.validate(body);
		res.status(StatusCode.OK).json({ success: checks.url });
	} catch (err: any) {
		res.status(StatusCode.BadRequest).json({ error: err.message });
	}
};
