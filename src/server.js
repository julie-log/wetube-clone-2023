import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

app.use(logger);

app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

const home = (req, res) => {
  return res.send("Home here.");
};

const login = (req, res) => {
  return res.send("Login here.");
};

app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}/ 🚀`);
app.listen(4000, handleListening);
