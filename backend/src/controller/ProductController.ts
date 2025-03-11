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

    async create(req: Request, res: Response){
        try{
            const { name, description, price, imageUrl } = req.body;
            const newProduct =  productsRepository.create({ name, description, price, imageUrl });
            await productsRepository.save(newProduct)
            return res.status(201).json(newProduct)
        }catch(error){
            console.error('Error creating product', error)
            return res.status(500).json({message: 'Internal Server Error.'})
        }
    }

    async update(req: Request, res: Response){
        try{
            const { id } = req.params
            const { name, description, price, imageUrl } = req.body;
            
            const products = await productsRepository.findOneBy({id: Number(id)})
            if(!products) {
                return res.status(404).json({message: 'Product not found.'})
            }

            Object.assign(products, { name, description, price, imageUrl });
            await productsRepository.save(products)
            return res.status(200).json(products)

        }catch(error){
            console.error("Error updating product",error)
            return res.status(500).json({message: 'Internal Server Error.'})
        }
    }

    async delete(req: Request, res: Response){
        try{   
            const { id } = req.params
            const products = await productsRepository.findOneBy({id: Number(id)})

            if(!products) return res.status(404).json({message: 'Product not found.'})
          

            await productsRepository.remove(products)
            return res.status(200).json({message: 'Product removed successfully'})

        }catch(error){
            console.error("Error deleting product",error)
            return res.status(500).json({message: 'Internal Server Error.'})
        }
    }
    
}