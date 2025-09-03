import { Leaf } from "lucide-react";
import ProductCard, { type ProductCardProps } from "./product-card";
import { useState } from "react";

const plans: ProductCardProps[] = [
  {
    title: "PF 1.8kva Mini",
    poweredAppliances: [
      "Lighting (5 LED Bulbs)",
      "1 Fan",
      "1 TV set",
      "1 Laptop",
      "1 Decoder/Home Theatre",
    ],
    price: "₦1,106,040.00",
    runtime:
      "Perfect for studio apartments with light power needs like fans, TV, and lighting.",
  },
  {
    title: "PF 4kva Midi",
    poweredAppliances: [
      "Lighting (10 LED Bulbs)",
      "2 Fans",
      "2 TV sets",
      "2 Laptops",
      "1 Refrigerator",
      "1 Decoder/Home Theatre",
    ],
    runtime:
      "Ideal for small homes running essential appliances like a fridge, TV, and lighting.",
    price: "₦2,889,216.00",
  },
  {
    title: "PF 4kva Midi Pro",
    poweredAppliances: [
      "Lighting (15 LED Bulbs)",
      "2 Fans",
      "2 TV sets",
      "4 Laptops",
      "1 Refrigerator",
      "1 Decoder/Home Theatre",
    ],
    runtime: "Great for 2–3 bedroom homes with extended runtime needs",
    price: "₦3,544,416.00",
  },
  {
    title: "PF 6kva Max",
    poweredAppliances: [
      "Lighting (20 LED Bulbs)",
      "1 Refrigerator",
      "2 Fans",
      "2 TV sets",
      "4 Laptops",
      "1 Ac 1.5hp",
      "1 Decoder/Home Theatre",
    ],
    runtime:
      "Best suited for full homes or small offices running heavy-duty appliances.",
    price: "₦5,492,124.00",
  },
];

const ProductPlans = () => {
  const [plan, setPlan] = useState<ProductCardProps>(plans[0]);

  return (
    <div className="bg-white py-20 md:py-28" id="products">
      <div className="mx-auto grid w-full grid-cols-12 gap-4 px-4 lg:gap-8 lg:px-10 xl:w-[1280px] xl:px-2">
        <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 md:col-start-3 md:col-end-11 lg:pb-10">
          <div className="mb-12 px-4 text-center sm:px-8 lg:px-0">
            <h1 className="break-normal pb-1 leading-24 mb-5 text-[30px] font-extralight sm:text-[3rem] md:text-[3.25rem] lg:text-[5rem] text-jump-gradient">
              Tailored Energy Solutions for Every Need!
            </h1>
            <div className="mx-10 mt-10">
              <p className="text-[1rem] leading-tight md:text-[1.25rem]">
                Explore our packages{" "}
                <span className="font-semibold">designed to meet</span> your
                energy requirements and help you{" "}
                <span className="font-semibold">save</span> on costs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-full grid-cols-12 gap-4 px-4 lg:gap-8 lg:px-10 xl:w-[1280px] xl:px-2">
        <div className="col-start-1 col-end-13">
          <div className="flex items-center flex-col md:flex-row h-max gap-4">
            <div className="w-full h-max border-gray-300 md:flex-1 md:border-r lg:min-w-[280px]">
              <ul className="bg-white">
                {plans.map((p, index) => (
                  <li
                    key={index}
                    onClick={() => setPlan(p)}
                    className={`flex cursor-pointer gap-x-1 border-b first:border-t border-gray-300 px-2 py-3 text-lg transition-opacity duration-300 lg:gap-x-4 lg:px-7 lg:py-8 hover:bg-secondary-bg lg:text-2xl ${p.title == plan.title ? " opacity-100" : "opacity-50"}`}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-green-600" />
                    </div>
                    {p.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex w-full items-center md:flex-[2] justify-center ">
              <ProductCard productPlan={plan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPlans;
