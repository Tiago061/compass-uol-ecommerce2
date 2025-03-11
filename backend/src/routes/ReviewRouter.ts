import { Router } from "express";

import { ReviewController } from "../controller/ReviewController";

const reviewRouter = Router();

const reviewController = new ReviewController

reviewRouter.get("/reviews", reviewController.getAll);
reviewRouter.get("/reviews/:productId", reviewController.getByProductId);
reviewRouter.post("/reviews", reviewController.create);
reviewRouter.put("/reviews/:id", reviewController.update);
reviewRouter.delete("/products/:id", reviewController.delete);



export default reviewRouter