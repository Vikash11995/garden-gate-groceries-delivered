
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Minus, Plus, FileText, RefreshCcw, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [showBill, setShowBill] = useState(false);
  const [billGenerated, setBillGenerated] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  
  const generateBill = () => {
    setShowBill(true);
    setBillGenerated(true);
    toast({
      title: "Bill generated",
      description: "Your bill has been generated successfully"
    });
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const invoiceNumber = `INV-${Math.floor(Math.random() * 10000)}-${new Date().getFullYear()}`;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-12 px-4">
          <div className="text-center py-16 flex flex-col items-center justify-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-garden-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/">
              <Button className="bg-garden-500 hover:bg-garden-600 text-white">
                Start Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-garden-800">Shopping Cart</h2>
              <Button 
                variant="outline" 
                className="text-gray-500 border-gray-300"
                onClick={clearCart}
              >
                <RefreshCcw className="h-4 w-4 mr-2" /> Clear Cart
              </Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="p-4 border-b border-gray-100 flex items-center gap-4"
                >
                  <div className="h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-garden-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}/{item.unit}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full border-garden-500 text-garden-500"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full border-garden-500 text-garden-500"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-right flex-shrink-0 min-w-[80px]">
                    <div className="font-medium text-garden-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button 
                      className="text-gray-400 hover:text-red-500 mt-1"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-garden-800 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(cartTotal * 0.05).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-3"></div>
                <div className="flex justify-between">
                  <span className="font-semibold text-garden-800">Total</span>
                  <span className="font-bold text-garden-800">${(cartTotal + (cartTotal * 0.05)).toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-garden-500 hover:bg-garden-600 text-white mb-3"
                onClick={generateBill}
                disabled={billGenerated}
              >
                <FileText className="h-4 w-4 mr-2" />
                {billGenerated ? "Bill Generated" : "Generate Bill"}
              </Button>
              
              <Button 
                className="w-full bg-carrot-500 hover:bg-carrot-600 text-white"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>

              {showPayment && (
                <div className="mt-4">
                  <PaytmCheckout amount={(cartTotal + (cartTotal * 0.05)).toFixed(2)} />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {showBill && (
          <div className="mt-12 bg-white rounded-xl shadow-md p-8 border border-gray-100 max-w-2xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Leaf className="h-6 w-6 text-garden-500" />
                  <span className="text-xl font-semibold text-garden-800">Garden Gate</span>
                </div>
                <p className="text-gray-500 text-sm">Fresh produce delivered to your door</p>
              </div>
              <div className="text-right">
                <h2 className="text-xl font-bold text-garden-800 mb-1">INVOICE</h2>
                <p className="text-gray-500 text-sm">{invoiceNumber}</p>
                <p className="text-gray-500 text-sm">Date: {currentDate}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6 mb-6">
              <h3 className="font-semibold text-garden-800 mb-3">Order Details</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 text-gray-500 text-sm font-medium">Item</th>
                    <th className="text-center py-2 text-gray-500 text-sm font-medium">Quantity</th>
                    <th className="text-center py-2 text-gray-500 text-sm font-medium">Unit Price</th>
                    <th className="text-right py-2 text-gray-500 text-sm font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="py-3 text-garden-800">{item.name}</td>
                      <td className="py-3 text-center text-gray-600">{item.quantity}</td>
                      <td className="py-3 text-center text-gray-600">${item.price.toFixed(2)}</td>
                      <td className="py-3 text-right font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax (5%)</span>
                  <span className="font-medium">${(cartTotal * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="border-t border-gray-100 my-2 pt-2"></div>
                <div className="flex justify-between">
                  <span className="font-semibold text-garden-800">Total</span>
                  <span className="font-bold text-garden-800">${(cartTotal + (cartTotal * 0.05)).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Thank you for shopping with Garden Gate!</p>
              <p>If you have any questions, please contact support@gardengate.com</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
