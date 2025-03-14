interface Product {
  id: number;
  nome: string;
  price: number;
  image?: string | null; 
  discount?: number | null;
  type?: string | null;
  description?: string | null;
  assessment: number;
  user_id?: string | null;
}

interface ProductVariant {
  id: number;
  product_id: number;
  size: string;
  color: string;
  quantity: number;
}

interface Review {
  id: number;
  user_id: string;
  product_id: number;
  feedback_date: string;
  comment: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface GetProductsResponse {
  products: Product;
  product_variants: ProductVariant[];
  reviews?: Review[]; 
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface GetAllProductsProps {
  initial: number;
  finalLimit: number;
  color?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Color = {
  name: string
  value: string
  textColor: string
  border: string
}

interface FilterState {
  initialPage: number;
  finalLimit: number;
  minPrice: number;
  maxPrice: number;
  color: string;
  size: string;
  currentPage: number;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FilterActions {
  setValue: (field: keyof FilterState, value: string | number) => void;
  reset: () => void;
}