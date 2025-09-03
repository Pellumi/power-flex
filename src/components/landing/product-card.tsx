import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ShoppingCart, Leaf } from "lucide-react";

export interface ProductCardProps {
  title: string;
  poweredAppliances: string[];
  runtime: string;
  price: string;
}

const ProductCard = ({ productPlan }: { productPlan: ProductCardProps }) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-pink-500 to-primary text-white px-4 py-2 rounded-lg font-bold text-lg transform rotate-12 shadow-lg">
          50%
        </div>
      </div>

      <Card className="bg-primary text-white p-6">
        <h1 className="text-3xl font-bold">{productPlan?.title}</h1>
      </Card>

      <Card className="p-8 mt-2 bg-primary-bg flex-1 flex flex-col">
        <div className="flex w-full justify-between flex-wrap gap-8 flex-1">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">
                Powered Appliances
              </h2>
              <div className="space-y-5">
                {productPlan?.poweredAppliances.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div className="text-center">
              <p className="text-primary font-medium mb-4 text-lg">
                Save up to 50% on power bills
              </p>
              <div className="text-4xl font-bold text-primary mb-8">
                {productPlan?.price}
              </div>
            </div>

            <div className="space-y-6">
              <Button className="w-full bg-primary hover:bg-primary cursor-pointer text-white py-4 px-8 text-lg font-semibold rounded-lg flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Buy Now</span>
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">✓ Easy Installation</p>
                <p className="text-sm text-gray-600">✓ 2 Year Warranty</p>
                <p className="text-sm text-gray-600">✓ 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-2 p-4 bg-primary-bg">
        <div className="flex justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-primary">Runtime</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {productPlan?.runtime}
            </p>
          </div>
          <div className="flex items-end">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Power up sustainably
                </p>
                <p className="text-xs text-gray-600">
                  Cut your carbon footprint
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
