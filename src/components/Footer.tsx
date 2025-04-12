
import { LeafyGreen, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-garden-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LeafyGreen className="h-8 w-8 text-garden-400" />
              <span className="text-xl font-semibold text-white">Garden Gate</span>
            </div>
            <p className="text-garden-200 mb-6">
              Bringing fresh, locally grown vegetables directly from our farm to your table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-garden-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-garden-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-garden-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-garden-200 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#" className="text-garden-200 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-garden-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-garden-200 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-garden-200 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-garden-400" />
                <span className="text-garden-200">123 Farm Road, Greenfield, CA 94501</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-garden-400" />
                <span className="text-garden-200">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-garden-400" />
                <span className="text-garden-200">info@gardengate.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-garden-200 mb-4">
              Subscribe to our newsletter for seasonal updates and special offers.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg bg-garden-700 border border-garden-600 text-white placeholder:text-garden-300 focus:outline-none focus:ring-2 focus:ring-garden-400"
              />
              <Button className="bg-garden-500 hover:bg-garden-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-garden-700 pt-8 text-center">
          <p className="text-garden-300 text-sm">
            © {new Date().getFullYear()} Garden Gate Groceries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
