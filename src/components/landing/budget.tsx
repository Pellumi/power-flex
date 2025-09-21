const Budget = () => {
  return (
    <div id="financing" className="py-35 text-center">
      <h3 className="mb-4 text-5xl font-light tracking-[-0.01em]">
        Flexible Financing For Every Budget
      </h3>
      <p className="font-extralight text-base md:text-xl mb-4 max-w-4xl mx-auto leading-relaxed">
        We have options for every type of budget.
      </p>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_4px_1fr] lg:gap-10">
        <div className="flex flex-col items-center gap-2 text-pretty py-0 text-center lg:py-10">
          <h4 className="text-balance text-3xl font-medium tracking-[-0.01em]">
            Outright Payment
          </h4>
          <p className="text-balance text-2xl font-light">
            Pay once, and you’re done! Our outright purchases are fair,
            competitive and transparent. Because going solar should be simple.
          </p>
        </div>
        <div className="align-stretch hidden w-1 rounded-full border-0 bg-primary lg:block"></div>
        <div className="flex flex-col items-center gap-2 text-pretty py-0 text-center lg:py-10">
          <h4 className="text-balance text-3xl font-medium tracking-[-0.01em]">
            Installment Plans
          </h4>
          <p className="text-balance text-2xl font-light">
            Spread your payments over time <br /> with our flexible financing
            options, designed to make solar accessible for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
