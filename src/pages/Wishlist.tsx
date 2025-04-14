
import Navbar from "@/components/Navbar";

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
        <div className="mt-6">
          {/* Wishlist items would go here */}
          <div className="border-t border-gray-200">
            <p className="py-12 text-center text-gray-500">
              No items in your wishlist yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
