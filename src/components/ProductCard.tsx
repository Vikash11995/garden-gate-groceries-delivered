
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  unit: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-garden-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-garden-800">{product.name}</h3>
          <span className="text-lg font-bold text-garden-600">${product.price.toFixed(2)}<span className="text-sm text-gray-500">/{product.unit}</span></span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        <Button className="w-full bg-garden-500 hover:bg-garden-600 text-white gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
