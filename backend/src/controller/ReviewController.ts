import { Request, Response } from "express";
import { reviewRepository } from "../repositories/ReviewRepository";
import { productsRepository } from "../repositories/ProductsRepository";
import { Product } from "../entities/Products";

export class ReviewController{
    async getAll(req: Request, res: Response){
        try{
            const reviews = await reviewRepository.find({ relations: ['product']})
            return res.json(reviews)
        }catch(error){
            return res.status(500).json({ error: 'Error fetching reviews'})
        }
    }

    async getByProductId(req: Request, res: Response){
        try{
            const { productId } = req.params;
            const reviews = await reviewRepository.find({ where: { product: { id: Number(productId) } } })
            return res.json(reviews)

        }catch(error){
            return res.status(500).json({ error: 'Error fetching product reviews' })
        }
    }

}