import { AppDataSource } from "../connection";
import { ProductDetails } from "../entities/ProductDetails";


export const ProductDetailsRepository = AppDataSource.getRepository(ProductDetails)