import {
    integer,
    pgTable,
    text,
    timestamp,
    varchar,
    doublePrecision,
  } from "drizzle-orm/pg-core";
  import { createInsertSchema, createSelectSchema } from "drizzle-zod";
  
  
  export const products = pgTable("products", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    nome: varchar("nome", { length: 255 }).notNull(),
    price: doublePrecision("price").notNull(),
    discount: doublePrecision("discount"),
    image: text("image"),
    type: varchar("type", { length: 100 }),
    description: varchar("description", { length: 255 }),
    assessment: doublePrecision("assessment").notNull(),
    user_id: text("user_id").references(() => users.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
  });
  
  export const productVariants = pgTable("product_variants", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    product_id: integer("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade", onUpdate: "cascade" }),
    size: varchar("size", { length: 55 }).notNull(), 
    color: text("color").notNull(), 
    quantity: integer("quantity").notNull().default(0), 
  });
  export const users = pgTable("users", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
  });
 
  
  export const reviews = pgTable("reviews", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    user_id: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
    product_id: integer("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade", onUpdate: "cascade" }),
    feedback_date: timestamp("feedback_date", { mode: "date" }).defaultNow(),
    comment: text("comment").notNull(),
  });
  
  export const insertUserSchema = createInsertSchema(users);
  export const selectUserSchema = createSelectSchema(users);
  
  export const insertProductSchema = createInsertSchema(products);
  export const selectProductSchema = createSelectSchema(products);
  
  export const insertProductVariantSchema = createInsertSchema(productVariants);
  export const selectProductVariantSchema = createSelectSchema(productVariants);
  

  
  export const insertOrderItemSchema = createInsertSchema(orderItems);
  export const selectOrderItemSchema = createSelectSchema(orderItems);
  
  export const insertReviewSchema = createInsertSchema(reviews);
  export const selectReviewSchema = createSelectSchema(reviews);
  