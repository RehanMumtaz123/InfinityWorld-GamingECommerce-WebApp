import express from "express";
import expressAsyncHandler from "express-async-handler";
import Feed from "../models/feedbackModel.js";

const feedRouter = express.Router();

feedRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const feed = new Feed({
      First_name: req.body.fname,
      Last_name: req.body.lname,
      email: req.body.email,
      Message: req.body.message,
    });
    const createdfeed = await feed.save();
    res.status(201).send({"Message":"success"});
  })
);

export default feedRouter;
