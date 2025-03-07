import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: Array<{
    id: string;
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
  }>;
}

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-integral-cf text-2xl md:text-4xl text-center mb-10 capitalize">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="px-14 py-4 border border-gray-200 rounded-full font-satoshi hover:bg-gray-50">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}