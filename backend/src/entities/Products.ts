import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ProductDetails } from "./ProductDetails";

 
@Entity("products")
export class Product {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string;
 
  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "varchar", length: 500, nullable: true })
  image: string;

  @OneToMany(() => ProductDetails, (details) => details.product)
  details: ProductDetails[];

}
 