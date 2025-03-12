import { AppDataSource } from "../connection";
import { Category } from "../entities/Category";

export const categoryRepository = AppDataSource.getRepository(Category)