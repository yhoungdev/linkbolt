import express from "express";
import auth_router from "./routers/auth_route";
import user_actions_route from "./routers/user_actions_route";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", auth_router), app.use("/api", user_actions_route);

app.get("/", (req, res) => {
	res.send(`viewing on port ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
