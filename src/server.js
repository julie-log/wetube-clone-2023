import express from "express";
const app = express();
const PORT = 4000;
const handleHome = (req, res) => {
  console.log(`Somebody is trying to go home,,,${req}`);
  return res.send("Home fin.");
};
app.get("/", handleHome);
const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}/ 🚀`);
app.listen(4000, handleListening);
