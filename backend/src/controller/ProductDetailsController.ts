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

    async create(req: Request, res: Response){
        try{
            const { size, color, stock, productId } =  req.body;
            const product = await productsRepository.findOne({ where: { id: Number(productId) } })
            if(!product) return res.status(404).json({error: 'Details not found'})
            const newDetail = ProductDetailsRepository.create({ size, color, stock, product })
        await ProductDetailsRepository.save(newDetail)
        }catch(error){
            return res.status(500).json({ error: 'Error fetching product details'})
        }
    }

    async update(req: Request, res: Response){
        try{
            const { id } = req.params
            const { size, color, stock } = req.body
            const detail = await ProductDetailsRepository.findOne({ where: { id: Number(id) }})
            if(!detail) return res.status(404).json({error: 'Detail not found'})
            Object.assign(detail, { size, color, stock})
            await ProductDetailsRepository.save(detail)
            return res.json(detail)
        }catch(error){
            return res.status(500).json({ error: 'Error fetching product details'})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const { id } = req.params
            const detail = await ProductDetailsRepository.findOne({ where: { id: Number(id) }})
            if(!detail) return res.status(404).json({error: 'Detail not found'})
            await ProductDetailsRepository.remove(detail)
            return res.status(204).send()
        }catch(error){
            return res.status(500).json({ error: 'Error fetching product details'})
        }
    }
}