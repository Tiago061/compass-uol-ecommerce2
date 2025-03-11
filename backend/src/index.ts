import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './connection'; 
import productsRouter from './routes/productsRouter';
import ProductsDetaisRouter from './routes/ProductDetailsRouter';
import reviewRouter from './routes/ReviewRouter';



const app = express()
const port = process.env.PORT



AppDataSource.initialize().then(() => {
    app.listen(port, () =>{
        console.log('Server connect')
    })

    app.use(productsRouter)
    app.use(ProductsDetaisRouter)
    app.use(reviewRouter)
})

