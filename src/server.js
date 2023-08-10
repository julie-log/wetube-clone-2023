import express from "express";
const app = express();
const PORT = 4000;
const handleHome = () => {
  console.log("Somebody ");
};
app.get("/", handleHome);
const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}/ 🚀`);
app.listen(4000, handleListening);
