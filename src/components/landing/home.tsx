import { landing_img } from "@/utils/images";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <div className="bg-secondary-bg/70" id="home">
      <div className="overflow-clip pt-28 xl:pt-0">
        <div className="mx-auto grid grid-cols-12 items-center gap-2 md:gap-16 md:px-10 xl:w-[1280px] xl:px-2">
          <div className="col-span-12 px-4 md:col-span-7 md:px-0">
            <h1 className="text-jump-gradient mb-8 break-words text-5xl font-light tracking-[-0.02em] lg:leading-20 lg:text-7xl">
              Affordable Solar Solutions with Flexible Financing
            </h1>
            <div className="mb-10 text-lg font-light lg:text-3xl">
              <p>
                Custom solar systems with convenient installment plans to power
                your home or business.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <a href="#products" data-discover="true">
                <span className="h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-black bg-transparent shadow-xs text-black hover:bg-accent hover:text-black dark:bg-input/30 dark:border-input dark:hover:bg-input/50 has-[&gt;svg]:px-4 w-auto">
                  Explore Products
                </span>
              </a>
              <Button size="lg" asLink to="/quotation/details" data-discover="true">
                Get a Quote
              </Button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <figure className="md:-mr-30">
              <img
                alt=""
                className="w-full"
                sizes="100vw"
                loading="lazy"
                decoding="async"
                src={landing_img}
                // src="https://jump.imgix.net/web/pages/products/products-dashboard.png?ixlib=react-custom&amp;auto=format"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
