
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">ShopEase</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                Products
              </Button>
            </Link>
            <Link to="/wishlist">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Wishlist
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Cart
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/products" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Products
              </Button>
            </Link>
            <Link to="/wishlist" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
            </Link>
            <Link to="/cart" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </Link>
            <Link to="/profile" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
