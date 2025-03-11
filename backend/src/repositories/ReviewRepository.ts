import { AppDataSource } from "../connection";
import { Review } from "../entities/Review";

export const reviewRepository = AppDataSource.getRepository(Review)