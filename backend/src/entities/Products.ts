import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ProductDetails } from "./ProductDetails";
import { Review } from "./Review";

 
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
  imageUrl: string;

  @OneToMany(() => ProductDetails, (details) => details.product)
  details: ProductDetails[]; // indica que um produto pode ter vários detalhes

  @OneToMany(() => Review, (reviews) => reviews.product)
  reviews: Review[]; // indica que um produto pode ter várias avaliações


}
 