import { useState } from "react";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { CardFormattedText } from "../ui/card";

interface FAQ {
  question: string;
  answer: string;
}

const faqs = [
  {
    question: "What is SapphireCredit Solar Financing?",
    answer:
      "SapphireCredit Solar Financing is a complete solar energy solution that provides affordable and reliable solar systems for homes and businesses. We also offer flexible financing plans to make solar energy accessible to everyone.",
  },
  {
    question: "How does it work?",
    answer:
      "We provide tailored solar solutions based on your energy needs. After assessing your requirements, we design, deliver, and install the ideal system for your home or business. Financing options are also available to make payments more manageable.",
  },
  {
    question: "Who is Solar Financing for?",
    answer:
      "SapphireCredit serves individuals, households, and businesses looking for affordable and sustainable solar energy solutions.",
  },
  {
    question: "What type of products do you offer?",
    answer: `Solar Panels

  - Inverters
  - Batteries
  - Installation & After-Sales Support`,
  },
  {
    question: "Are the payment options flexible?",
    answer: `Yes: We offer two payment options:

  - Outright Payment: Pay the total cost upfront.
  - Installment Plans: Spread payments over a period of 12 months.`,
  },
  {
    question: "Is Collateral Required?",
    answer: "No, collateral is not required.",
  },
  {
    question: "Can I use it to power my entire home or business?",
    answer:
      "Yes, our solutions are customized to meet your energy needs, whether for a single appliance, your entire home, or business operations.",
  },
  {
    question: "What warranty do the products come with",
    answer:
      "All products come with a manufacturer’s warranty: panels up to 25 years, with Inverters & Batteries up to 3 years.",
  },
  {
    question: "Is the system scalable",
    answer:
      "Yes, our solutions support households and businesses, adapting to growing energy needs.",
  },
];

const FAQSection = () => {
  return (
    <div className="py-35 text-center mx-auto grid grid-cols-12 items-center gap-2 md:gap-16 md:px-10 xl:w-[1280px] xl:px-2">
      <div className="col-span-12 px-4 md:px-0">
        <h3 className="mb-10 text-5xl font-light tracking-[-0.01em]">
          Frequently Asked Questions
        </h3>
        <div className="flex flex-col gap-4 text-left">
          {faqs.map((faq, index) => (
            <CollapsibleMap key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

const CollapsibleMap = ({ faq }: { faq: FAQ }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-t-lg hover:bg-gray-100 transition-colors">
        <span className="text-lg text-gray-900">{faq.question}</span>
        {open ? (
          <FiChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <FiChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </CollapsibleTrigger>

      {/* Animated Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border border-gray-200 border-t-0 rounded-b-lg"
          >
            <div className="p-4">
              <p className="text-gray-700 leading-relaxed">
                <CardFormattedText text={faq.answer} />
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Collapsible>
  );
};
