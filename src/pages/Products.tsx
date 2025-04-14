
import Navbar from "@/components/Navbar";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* Product items would go here */}
          <div className="p-4 border rounded-md shadow-sm bg-white">
            <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-medium">Product 1</h3>
            <p className="text-gray-500">$99.99</p>
          </div>
          <div className="p-4 border rounded-md shadow-sm bg-white">
            <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-medium">Product 2</h3>
            <p className="text-gray-500">$149.99</p>
          </div>
          <div className="p-4 border rounded-md shadow-sm bg-white">
            <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-medium">Product 3</h3>
            <p className="text-gray-500">$199.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
