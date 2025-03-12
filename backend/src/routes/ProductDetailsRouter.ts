import { Router } from "express";

import { ProductDetailsController } from "../controller/ProductDetailsController";

const ProductsDetaisRouter = Router();

const productDetailsController = new ProductDetailsController();

ProductsDetaisRouter.get("/product-details", productDetailsController.getAll);
ProductsDetaisRouter.get("/product-details/:id", productDetailsController.getById);



export default ProductsDetaisRouter