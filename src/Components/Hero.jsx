import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-15">
      <div className="badge bg-slate-100 py-2 px-3 rounded-full text-xs shadow-md">
        <p className="">
          The complete checklist for incorporating
          <i className="ri-arrow-right-line ml-2"></i>
        </p>
      </div>
      <div className="heading mt-13">
        <h1 className="text-6xl tracking-tight text-pretty text-center font-medium">
          Magically simplify <br />
          accounting and taxes
        </h1>
        <p className="mt-5 text-center tracking-tight">
          Automated bookkeeping, effortless tax filing, real-time insights.
          <br />
          Set up in 10 mins. Back to building.
        </p>
      </div>
      <div className="button flex gap-5 mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm text-shadow-lg px-3 py-1 rounded-lg shadow-md transition duration-200">
          Get Started
        </button>
        <button className="bg-slate-100 text-black text-sm text-shadow-lg px-4 py-2 rounded-lg shadow-md transition duration-200">
          Get Pricing
            <i className="ri-arrow-right-line ml-2"></i>
        </button>

      </div>
      <div className="mt-10 text-sm text-slate-400">
        <p>Currently for US-based Delaware C-Corps</p>
      </div>
      <div className="img mt-15">
        <img 
        className="mask-b-from-0 to-50%"
         src="./hero-ui-v5.webp" 
         alt="Hero UI" />
      </div>
    </div>
  );
};

export default Hero;
