import { logo_main } from "@/utils/images";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-25 bg-primary-bg text-[#353535]">
      <div className="mx-auto flex flex-col items-center px-4 lg:px-10 xl:w-4xl xl:px-2">
        <h2 className="mb-10">
          <img
            className="w-50 h-auto max-w-full md:w-80"
            width="360"
            height="30"
            alt="Power flex"
            src={logo_main}
          />
        </h2>
        <div className="mx-auto mb-14 text-center text-xl font-light tracking-[-0.01em] md:max-w-5xl md:text-3xl">
          <p>
            At SapphireCredit - Solar Financing, we're dedicated to delivering
            sustainable energy solutions tailored for Nigerian homes and
            businesses. From advanced technology to exceptional customer
            service. We're redefining how you experience energy.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#products" data-discover="true">
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-black bg-transparent shadow-xs text-black hover:bg-accent hover:text-black dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-auto">
              Explore Products
            </span>
          </a>
          <Link to="quotation/details">
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-black bg-transparent shadow-xs text-black hover:bg-accent hover:text-black dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-auto">
              Get a Quote Today
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
