import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Products";

@Entity("/reviews")
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    comment: string;
    
    @Column({ type: 'int', width: 1 })
    rating: number;

    @Column({ type: 'varchar', length: 255 })
    userName: string;

    @ManyToOne(() => Product, (product) => product.reviews, { onDelete: 'CASCADE' })
    product: Product

}