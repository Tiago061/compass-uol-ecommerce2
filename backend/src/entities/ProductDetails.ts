import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../entities/Products";

@Entity('product_details')
export class ProductDetails{
      @PrimaryGeneratedColumn()
      id: number;

      @Column({ type: "varchar", length: 50 })
      size: string;

      @Column({ type: "varchar", length: 50 })
      color: string;

      @Column({type: 'int'})
      stock: number;

      @ManyToOne(() => Product, ( product) => product.details, {onDelete: 'CASCADE'})
      product: Product;
     
}