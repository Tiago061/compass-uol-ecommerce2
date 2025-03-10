import { Router } from "express";
import { ProductController } from "../controller/ProductController";

const productsRouter = Router();

const productController = new ProductController();

productsRouter.get('/products', productController.getAll.bind(productController)) 



export default productsRouter