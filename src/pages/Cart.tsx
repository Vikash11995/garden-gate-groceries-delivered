
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <div className="mt-8">
          <div className="flow-root">
            <div className="border-t border-gray-200">
              <p className="py-12 text-center text-gray-500">
                Your cart is empty
              </p>
              <div className="flex justify-center">
                <Link to="/products">
                  <Button>Continue Shopping</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
