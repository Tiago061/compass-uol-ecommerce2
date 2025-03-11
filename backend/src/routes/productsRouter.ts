import { Router } from "express";
import { ProductController } from "../controller/ProductController";

const productsRouter = Router();

const productController = new ProductController
productsRouter.get("/products", productController.getAll);
productsRouter.get("/products/:id", productController.getById);
productsRouter.post("/products", productController.create);
productsRouter.put("/products/:id", productController.update);
productsRouter.delete("/products/:id", productController.delete);



export default productsRouter