import express from "express";
import maal from "./data";
import cors from "cors";

const app = express();

app.use(cors());
app.get("/api/products", (req, res) => {
  res.send(maal);
});

app.listen(15000, () => {
  console.log("server running");
});
