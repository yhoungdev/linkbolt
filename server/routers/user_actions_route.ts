import {
	get_user_links,
	remove_saved_link,
	save_user_link,
	share_links,
} from "../controller/user_links_controller";
import express from "express";
import { authenticate } from "../middleware/auth";
const router = express.Router();

router.post("/user/save_link", authenticate, save_user_link);
router.post("/user/share_links", authenticate, share_links);
router.get("/user/links", authenticate, get_user_links);

router.delete("/user/delete/link/:id", authenticate , remove_saved_link)

const user_actions_route = router;
export default user_actions_route;
