import { save_user_link, share_links } from "../controller/user_links_controller";
import express from "express";
const router = express.Router();

router.post("/user/save_link", save_user_link);
router.post("/user/share_links" , share_links);


const user_actions_route = router;
export default user_actions_route;
