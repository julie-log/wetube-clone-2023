import express from "express";
const app = express();
const PORT = 4000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed");
  next();
};
const handleProtected = () => {
  return res.send("Welcome to the private lounge.");
};
const handleHome = (req, res) => {
  //   return res.end();
  return res.send("Home here.");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}/ 🚀`);
app.listen(4000, handleListening);
