import { Router } from "express";
import { ProductController } from "../controller/ProductController";

const productsRouter = Router();

const productController = new ProductController
productsRouter.get("/products", productController.getAll);
productsRouter.get("/products/:id", productController.getById);




export default productsRouter