
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PaytmCheckoutProps {
  amount: string;
}

const PaytmCheckout = ({ amount }: PaytmCheckoutProps) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const formatCardNumber = (input: string) => {
    // Remove non-digit characters
    const digits = input.replace(/\D/g, "");
    
    // Format with spaces after every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
    
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.slice(0, 19);
  };

  const formatExpiryDate = (input: string) => {
    // Remove non-digit characters
    const digits = input.replace(/\D/g, "");
    
    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
    
    return digits;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(formatExpiryDate(e.target.value));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cardNumber.length < 19) {
      toast({
        title: "Invalid card number",
        description: "Please enter a valid 16-digit card number",
        variant: "destructive"
      });
      return;
    }
    
    if (expiryDate.length < 5) {
      toast({
        title: "Invalid expiry date",
        description: "Please enter a valid expiry date (MM/YY)",
        variant: "destructive"
      });
      return;
    }
    
    if (cvv.length < 3) {
      toast({
        title: "Invalid CVV",
        description: "Please enter a valid 3-digit CVV",
        variant: "destructive"
      });
      return;
    }
    
    if (!cardName) {
      toast({
        title: "Card name required",
        description: "Please enter the name on your card",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate payment processing
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      
      toast({
        title: "Payment successful",
        description: `Your payment of $${amount} has been processed successfully`,
      });
    }, 2000);
  };

  if (isCompleted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <CheckCircle className="mx-auto h-10 w-10 text-green-500 mb-2" />
        <h3 className="font-medium text-green-800 mb-1">Payment Successful</h3>
        <p className="text-sm text-green-600">Your order has been placed successfully!</p>
      </div>
    );
  }

  return (
    <div className="mt-4 border border-gray-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="h-5 w-5 text-garden-600" />
        <h3 className="font-medium text-garden-800">Paytm Payment Gateway</h3>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="bg-white"
              disabled={isProcessing}
            />
          </div>
          
          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <Input
              id="cardName"
              placeholder="John Doe"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="bg-white"
              disabled={isProcessing}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <Input
                id="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className="bg-white"
                disabled={isProcessing}
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <Input
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={handleCvvChange}
                type="password"
                className="bg-white"
                disabled={isProcessing}
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-garden-600 hover:bg-garden-700 text-white mt-2"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : `Pay $${amount}`}
          </Button>
          
          <div className="text-xs text-gray-500 text-center mt-2">
            Secure payment powered by Paytm
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaytmCheckout;
