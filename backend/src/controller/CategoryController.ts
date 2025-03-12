import { Request, Response } from "express";
import { categoryRepository } from "../repositories/CategoryRepository";

export class CategoryController {
    async getAll(req: Request, res: Response){
        try{
            const categories = await categoryRepository.find({relations: ['products'] })
            return res.json(categories)
        }catch(error){
            return res.status(500).json({ error: 'Error fetching category'})
        }
    }
}