import express from "express";
import maal from "./data";
import cors from "cors";

const app = express();

// app.use(cors());
app.get("/api/products/:id", (req, res) => {
  const prodid = req.params.id;
  const product = maal.PSproducts.find((x) => x._id === prodid);
  console.log("ueh",product)
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "Product not found" });
  }
});


app.get("/api/products", (req, res) => {
  res.send(maal);
});

app.listen(15000, () => {
  console.log("server running");
});
