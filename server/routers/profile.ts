import { get_profile, get_user_profile } from "../controller/profile";
import { authenticate } from "../middleware/auth";

const express = require("express");
const router = express.Router();

router.get("/profile", get_profile);
router.get("/user/profile", authenticate, get_user_profile);

const profile_router = router;
export default profile_router;
