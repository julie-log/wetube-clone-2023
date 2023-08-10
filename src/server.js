import express from "express";
const app = express();
const PORT = 4000;

const ggMiddleware = (req, res, next) => {
  console.log(`Someone is going to ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.end();
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.get("/", ggMiddleware, handleHome);
app.get("/login", ggMiddleware, handleLogin);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}/ 🚀`);
app.listen(4000, handleListening);
