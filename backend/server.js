import express from "express";
import maal from "./data";
import userRouter from './routers/userRouter.js';
import config from './config.js';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import orderRouter from "./routers/orderRouter";
dotenv.config();

const app = express();
 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log(`connection successful`))
  .catch((err) => console.log(err));

// app.use(cors());
app.get("/api/products/:id", (req, res) => {
  const prodid = req.params.id;
  const product = maal.PSproducts.find((x) => x._id === prodid);
  const Pproduct = maal.PS.find((x) => x._id === prodid);
  console.log("ueh", product);
  if (product) {
    res.send(product);
  } else if (Pproduct) {
    res.send(Pproduct);
  } else {
    res.status(404).send({ msg: "Product not found" });
  }
});
app.get("/api/xproducts/:id", (req, res) => {
  const prodid = req.params.id;
  const Xproduct = maal.XBOX.find((x) => x._id === prodid);
  const product = maal.XBproducts.find((x) => x._id === prodid);
  // console.log("ueh", product);
  if (product) {
    res.send(product);
  } else if (Xproduct) {
    res.send(Xproduct);
  } else {
    res.status(404).send({ msg: "Product not found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(maal);
});

app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


app.listen(process.env.PORT || 15000, () => {
  console.log("server running");
});
