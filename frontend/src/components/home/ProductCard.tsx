import { Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating?: number;
}

export function ProductCard({ image, title, price, originalPrice, rating = 5 }: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="w-full h-[200px] md:h-[320px] object-cover rounded-lg" />
      <div className="mt-2 space-y-1">
        <h3 className="font-satoshi text-base md:text-xl">{title}</h3>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-satoshi text-lg md:text-2xl">${price}</span>
          {originalPrice && (
            <>
              <span className="text-gray-400 line-through">${originalPrice}</span>
              <span className="text-red-400 text-sm px-2 py-1 bg-red-50 rounded-full">
                -{discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}