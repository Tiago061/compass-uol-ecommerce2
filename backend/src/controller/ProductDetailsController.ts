import { Request, Response } from "express";
import { ProductDetailsRepository } from "../repositories/ProductDetailsRepository";
import { productsRepository } from "../repositories/ProductsRepository";

export class ProductDetailsController{
    
    async getAll(req: Request, res: Response){
        try{
            const details = await ProductDetailsRepository.find({relations: ['product']})
            return res.json(details)

        }catch(error){
            return res.status(500).json({ error: 'Error fetching product details'})
        }
    }

    async getById(req: Request, res: Response){
        try{
            const { id } = req.params
            const details = await ProductDetailsRepository.findOne({ where: { id: Number(id) }, relations: ['products'] })
            if(!details) return res.status(404).json({error: 'Details not found'})
            return res.json(details)

        }catch(error){
            return res.status(500).json({ error: 'Error fetching product details'})
        }
    }
}