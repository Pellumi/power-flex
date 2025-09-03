import GuideStepOne from "./guide/guide-step-one";
import GuideStepTwo from "./guide/guide-step-two";
import GuideStepThree from "./guide/guide-step-three";

const Guide = () => {
  return (
    <div id="how-it-works" className="py-35 overflow-clip text-center">
      <h1 className="font-extralight text-[26px] md:text-3xl lg:text-[3.5rem] text-neutral-darkCharcoal leading-tight mb-4 max-w-5xl mx-auto">
        How it Works
      </h1>
      <p className="font-extralight text-base md:text-xl mb-4 max-w-4xl mx-auto leading-relaxed">
        Simplified solar installation in 3 steps
      </p>
      <div className="gap-25 mx-auto grid grid-cols-1 px-4 lg:px-10 xl:w-[1280px] xl:px-2 mt-8">
        <GuideStepOne />
        <GuideStepTwo />
        <GuideStepThree />
      </div>
    </div>
  );
};

export default Guide;
