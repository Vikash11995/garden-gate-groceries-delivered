
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LeafyGreen, ShoppingCart, Menu, X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { cartCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <LeafyGreen className="h-8 w-8 text-garden-500" />
          <span className="text-xl font-semibold text-garden-800">Garden Gate</span>
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <Link to="/#products" className="text-gray-700 hover:text-garden-500 transition-all-200">
                Products
              </Link>
              <Link to="/#how-it-works" className="text-gray-700 hover:text-garden-500 transition-all-200">
                How It Works
              </Link>
              <Link to="/#about" className="text-gray-700 hover:text-garden-500 transition-all-200">
                About Us
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-garden-500 transition-all-200" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-carrot-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </Link>
              <Link to="/signin">
                <Button className="bg-garden-500 hover:bg-garden-600 text-white">Sign In</Button>
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="container mx-auto mt-4 pb-4 flex flex-col gap-4">
          <Link to="/#products" className="text-gray-700 py-2 border-b border-gray-100">
            Products
          </Link>
          <Link to="/#how-it-works" className="text-gray-700 py-2 border-b border-gray-100">
            How It Works
          </Link>
          <Link to="/#about" className="text-gray-700 py-2 border-b border-gray-100">
            About Us
          </Link>
          <div className="flex items-center justify-between pt-2">
            <Link to="/cart" className="relative flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-carrot-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
              <span className="text-gray-700">Cart</span>
            </Link>
            <Link to="/signin">
              <Button className="bg-garden-500 hover:bg-garden-600 text-white">Sign In</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
