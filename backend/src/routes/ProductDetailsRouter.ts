import { Router } from "express";

import { ProductDetailsController } from "../controller/ProductDetailsController";

const ProductsDetaisRouter = Router();

const productDetailsController = new ProductDetailsController();

ProductsDetaisRouter.get("/product-details", productDetailsController.getAll);
ProductsDetaisRouter.get("/product-details/:id", productDetailsController.getById);
ProductsDetaisRouter.post("/product-details", productDetailsController.create);
ProductsDetaisRouter.put("/product-details/:id", productDetailsController.update);
ProductsDetaisRouter.delete("/product-details/:id", productDetailsController.delete);



export default ProductsDetaisRouter