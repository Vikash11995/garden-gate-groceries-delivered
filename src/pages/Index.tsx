
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
        <div className="bg-gray-200 absolute top-0 w-full h-full bg-center bg-cover">
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your Shopping Journey Starts Here
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Discover the latest trends and find amazing deals on our platform.
                </p>
                <div className="mt-8">
                  <Link to="/products">
                    <Button size="lg" className="mr-4">
                      Shop Now
                    </Button>
                  </Link>
                  <Link to="/wishlist">
                    <Button variant="outline" size="lg">
                      View Wishlist
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20 bg-gray-50 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl font-semibold">Free Shipping</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Free shipping on all orders over $50
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl font-semibold">24/7 Support</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Our customer service team is available 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl font-semibold">Easy Returns</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    30-day easy return policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
