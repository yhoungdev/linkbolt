import express, { Request, Response } from "express";
import * as Yup from "yup";
import { StatusCode } from "../enums/staus_code";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

const validation_schema = Yup.object().shape({
	url: Yup.string().required().url(),
	name: Yup.string().required("Platform name is required"),
});

const validate_share_links = Yup.object().shape({
	email: Yup.string().required().email(),
	body: Yup.string().required(),
});

export const save_user_link = async (req: Request, res: Response) => {
	const body = req.body;
	//@ts-ignore
	const userId = req?.id;

	try {
		const checks = await validation_schema.validate(body);

		const linkExisted = await prisma.links.findFirst({
			where: {
				url: body?.url,
				id: userId
			},
		});

		if (!linkExisted) {
			const add_link = await prisma.links.create({
				data: {
					...checks,
					userId: userId,
				},
			});

			if (add_link) {
				return res
					.status(StatusCode.OK)
					.json({ message: "Link successfully added" });
			} else {
				return res.status(StatusCode.BadRequest).send("something went wrong ");
			}
		}

		return res
			.status(StatusCode.Forbidden)
			.json({ error: "Url already exists" });
	} catch (err: any) {
		return res.status(StatusCode.BadRequest).json({ error: err.message });
	}
};

//get links from user
export const get_user_links = async (req: Request, res: Response) => {
	//@ts-ignore
	const userId = req?.id;

	try {
		const get_links = await prisma.links.findMany({
			where: {
				userId: userId,
			},
		});
		return res.status(StatusCode.OK).json({ data: get_links });
	} catch (err) {
		res.status(StatusCode.OK).json({ message: "No link found" });
	}
};

//share links to friends
export const share_links = async (req: Request, res: Response) => {
	try {
		const validateObj = await validate_share_links.validate(req.body);
		return res.status(StatusCode.OK).json({ success: validateObj });
	} catch (error: any) {
		return res.status(StatusCode.BadRequest).json({ error: error?.message });
	}
};

//function to transfer

export const remove_saved_link = async (req: Request, res: Response) => {
	const linkId = req.params.id;

	try {
		const removeLink = await prisma.links.delete({
			where: {
				id: linkId,
			},
		});

		if (removeLink) {
			return res.status(StatusCode.OK).json({
				message: "Link deleted successfully",
			});
		}

		return res
			.status(StatusCode.BadRequest)
			.json({ error: "Failed to delete link" });
	} catch (err) {
		console.log(err, "returned");
	}
};
