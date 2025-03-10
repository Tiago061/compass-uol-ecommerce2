import { Request, Response } from "express";
import { productsRepository } from "../repositories/ProductsRepository";

export class ProductController {

    async getAll(req: Request, res: Response){
        try{
            const products = await productsRepository.find()
            res.json(products)
        }catch(err){
            console.log(err)
            res.status(500).json({ message: "Erro ao buscar produtos." });
        }
    }
}