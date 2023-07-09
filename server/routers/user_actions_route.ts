import { save_user_link } from "../controller/user_links_controller";
import express from "express";
const router = express.Router();

router.post("/users/save_link", save_user_link);

const user_actions_route = router;
export default user_actions_route;
