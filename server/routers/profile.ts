import { get_profile } from "../controller/profile";

const express = require("express");
const router = express.Router();

router.get("/profile", get_profile);

const profile_router = router;
export default profile_router;
