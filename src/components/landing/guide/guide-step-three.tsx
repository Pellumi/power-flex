import { power_step } from "@/utils/images";

const GuideStepThree = () => {
  return (
    <section className="group">
      <h2 className="text-jump-gradient mb-10 text-center text-4xl font-light">
        Step Three: Power Up
      </h2>
      <div className="flex flex-col items-center md:flex-row md:gap-4 group-even:md:flex-row-reverse md:gap-15 lg:gap-20">
        <ul>
          <div className="relative border-l-2 border-l-[#C3D6E4] pb-10 pl-8 text-2xl tracking-[-0.02em] last:border-l-transparent md:max-w-[440px] lg:max-w-[520px]">
            <div className="-translate-x-6/12 absolute left-[-1px] h-5 w-5 rounded-full bg-[#C3D6E4]"></div>
            <h3 className="-top-1.75 relative font-medium">Clean Energy</h3>
            <p className="leading-x-tight text-balance font-light">
              Harness renewable power for a sustainable future.
            </p>
          </div>
          <div className="relative border-l-2 border-l-[#C3D6E4] pb-10 pl-8 text-2xl tracking-[-0.02em] last:border-l-transparent md:max-w-[440px] lg:max-w-[520px]">
            <div className="-translate-x-6/12 absolute left-[-1px] h-5 w-5 rounded-full bg-[#C3D6E4]"></div>
            <h3 className="-top-1.75 relative font-medium">Lower Bills</h3>
            <p className="leading-x-tight text-balance font-light">
              Reduce electricity costs with efficient solar solutions.
            </p>
          </div>
        </ul>
        <figure className="flex-1">
          <img
            alt=""
            className="w-full"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            src={power_step}
          />
        </figure>
      </div>
    </section>
  );
};

export default GuideStepThree;
