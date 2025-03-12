import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Products";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "varchar", length: 50, unique: true })
    name: string

    @OneToMany(() => Product, (product) => product.category)
    products: Product[] //Um relacionamento para associar vários produtos a uma categoria.

}