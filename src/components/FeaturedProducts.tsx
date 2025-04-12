
import ProductCard, { Product } from './ProductCard';

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Organic Carrots",
    description: "Sweet and crunchy locally grown organic carrots, perfect for salads, juicing or cooking.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
    category: "Root Vegetables",
    unit: "bunch"
  },
  {
    id: 2,
    name: "Fresh Spinach",
    description: "Nutrient-rich dark leafy greens harvested at peak freshness for maximum flavor and health benefits.",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
    category: "Leafy Greens",
    unit: "bag"
  },
  {
    id: 3,
    name: "Bell Peppers",
    description: "Colorful and crunchy bell peppers that add vibrancy and vitamin C to any dish.",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
    category: "Nightshades",
    unit: "each"
  },
  {
    id: 4,
    name: "Cherry Tomatoes",
    description: "Sweet and juicy cherry tomatoes bursting with summer flavor, perfect for salads or snacking.",
    price: 4.29,
    image: "https://images.unsplash.com/photo-1592924357809-9a083b57d548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
    category: "Nightshades",
    unit: "pint"
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-800 mb-4">
            Our Featured <span className="text-garden-500">Products</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our seasonal selection of locally grown vegetables, harvested at peak freshness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#all-products"
            className="inline-block px-6 py-3 border-2 border-garden-500 text-garden-500 font-medium rounded-lg hover:bg-garden-500 hover:text-white transition-all duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
