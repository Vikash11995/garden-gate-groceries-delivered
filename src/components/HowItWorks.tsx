
import { ShoppingBag, Truck, Calendar } from "lucide-react";

const steps = [
  {
    icon: <ShoppingBag className="h-12 w-12 text-white" />,
    title: "Choose Your Vegetables",
    description: "Browse our selection of locally grown, seasonal vegetables and create your custom box.",
    color: "bg-garden-500"
  },
  {
    icon: <Calendar className="h-12 w-12 text-white" />,
    title: "Select Delivery Schedule",
    description: "Choose a convenient weekly, bi-weekly or monthly delivery schedule that works for you.",
    color: "bg-earth-500"
  },
  {
    icon: <Truck className="h-12 w-12 text-white" />,
    title: "Enjoy Farm Fresh Delivery",
    description: "We'll deliver your vegetables right to your doorstep on your scheduled delivery day.",
    color: "bg-carrot-500"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-800 mb-4">
            How It <span className="text-garden-500">Works</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our simple process brings farm-fresh vegetables directly from our garden to your table.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${step.color} rounded-full p-6 mb-6 shadow-lg transform transition-transform hover:scale-110 duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-garden-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="mt-20 bg-garden-50 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <p className="text-gray-700 italic text-lg mb-4">
                "Garden Gate has transformed our family's eating habits. The convenience of fresh vegetables delivered to our door means we eat healthier meals more often. The quality is outstanding!"
              </p>
              <p className="font-semibold text-garden-800">— Sarah Johnson, Subscriber since 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
