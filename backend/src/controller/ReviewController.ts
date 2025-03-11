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

    async create(req: Request, res: Response) {
        try{
            const { productId, comment, rating, userName } = req.body
            const product = await productsRepository.findOne({ where: { id: Number(productId) } })
            
            if(!product) return res.status(404).json({ error: 'Product not found'})
            const newReview = reviewRepository.create({ comment, rating, userName, product: product })
            await reviewRepository.save(newReview)
            return res.status(201).json(newReview)
        }catch(error){
            return res.status(500).json({ error: 'Error creating review' })
        }
    }

    async update(req: Request, res: Response) {
        try {
          const { id } = req.params;
          const { comment, rating} = req.body;
    
          const review = await reviewRepository.findOne({ where: { id: Number(id) } });
          if (!review) return res.status(404).json({ error: "Review not found" });
    
          review.comment = comment;
          review.rating = rating;
    
          await reviewRepository.save(review);
          return res.json(review);
        } catch (error) {
          return res.status(500).json({ error: "Erro ao atualizar avaliação" });
        }
      }

    async delete(req: Request, res: Response){
        try{
            const { id } = req.params
            const review = await reviewRepository.findOne({ where: { id: Number(id ) } })
            if(!review) return res.status(404).json({ error: 'Review not found'})

            await reviewRepository.remove(review)
            return res.status(204).send()
        }catch(error){
            return res.status(500).json({ error: 'Error deleting review'})
        }
    }
}