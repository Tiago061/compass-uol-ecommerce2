import { Router } from "express";

import { ReviewController } from "../controller/ReviewController";

const reviewRouter = Router();

const reviewController = new ReviewController

reviewRouter.get("/reviews", reviewController.getAll);
reviewRouter.get("/reviews/:productId", reviewController.getByProductId);




export default reviewRouter