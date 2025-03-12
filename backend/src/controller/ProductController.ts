import { Request, Response } from "express";
import { productsRepository } from "../repositories/ProductsRepository";

export class ProductController {

    async getAll(req: Request, res: Response){
        try{
            const products = await productsRepository.find()
            res.json(products)
        }catch(err){
            console.log(err)
            res.status(500).json({ message: "Erro fetching products" });
        }
    }

    async getById(req: Request, res: Response){
        try{
            const { id } = req.params;
            const products = await productsRepository.findOneBy({id: Number(id)})

            if(!products) return res.status(404).json({message: 'Product not found.'})  
            return res.status(200).json(products);
        }catch(error){
            console.error("Error searching for product by ID:", error)
            return res.status(500).json({message: 'Internal Server Error.'})
        }
    }

    
}