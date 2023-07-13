import express, { Request, Response } from "express";
import * as Yup from "yup";
import { StatusCode } from "../enums/staus_code";


const router = express.Router();

const validation_schema = Yup.object().shape({
	url: Yup.string().required().url(),
});

const validate_share_links = Yup.object().shape({
	email: Yup.string().required().email(), 
	body: Yup.string().required()
})

export const save_user_link = async (req: Request, res: Response) => {
	const body = req.body;
	try {
		const checks = await validation_schema.validate(body);
		return res.status(StatusCode.OK).json({ success: checks.url });
	} catch (err: any) {
		return res.status(StatusCode.BadRequest).json({ error: err.message });
	}
};

//share links to friends
export const share_links = async  (req:Request, res: Response) => {
	try {
		const validateObj = await validate_share_links.validate(req.body);
		return res.status(StatusCode.OK).json({success: validateObj})
	} catch ( error: any ) {
		return res.status(StatusCode.BadRequest).json({error: error?.message})
	}

};
