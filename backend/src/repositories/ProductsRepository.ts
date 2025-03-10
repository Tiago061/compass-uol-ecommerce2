import { AppDataSource } from "../connection";
import { Product } from "../entities/Products";



export const productsRepository = AppDataSource.getRepository(Product)