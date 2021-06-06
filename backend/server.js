import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/cars", (req, res) => {
  console.log("cars");
  res.send(data.cars);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
