
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-garden-50 to-garden-100 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-garden-800 mb-4">
              Farm Fresh Vegetables
              <br />
              <span className="text-garden-500">Delivered to Your Door</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md">
              Bringing the freshest, locally grown produce directly from our garden to your table.
              Start eating healthier today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-garden-500 hover:bg-garden-600 text-white text-lg py-6 px-8">
                Shop Now
              </Button>
              <Button variant="outline" className="border-garden-500 text-garden-500 hover:bg-garden-50 text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 ease-in-out">
              <img 
                src="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Fresh Vegetables" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-carrot-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-garden-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-garden-200 rounded-full -mr-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-carrot-100 rounded-full -ml-48 -mb-48 opacity-20"></div>
    </section>
  );
};

export default Hero;
