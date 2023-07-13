import express, { Response, Request } from "express";
import { login, signup } from "../controller/auth_controller";
const passport = require("../config/passport_setup")

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);


router.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }));

router.get("/google/login", passport.authenticate("google"), (req: Request, res: Response) => {
    //@ts-ignore
    const profile = req?.user
    res.status(200).json({
    success: "welcome back",
    profile: profile
  });
});

const auth_router = router;

export default auth_router;
