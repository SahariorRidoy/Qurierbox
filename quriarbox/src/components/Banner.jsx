import React from "react";
import banner from '../assets/bannerMain.png'
const Banner = () => {
  return (
    <div className="bg-[#FFF1DC] lg:py-44 py-16">
      <div className="max-w-[1320px] mx-auto lg:px-0 px-5 flex flex-col gap-10 lg:gap-4 lg:flex-row items-center justify-between">
        <div>
            <h1 className="text-[#261134] text-5xl max-w-[700px]">A trusted provider of <br /><span className="font-bold">courier services.</span></h1>
            <p className="text-xl text-[#4D4D4D] max-w-[380px] mt-4 mb-10">We deliver your products safely to your home in a reasonable time.</p>
            <button><a className="text-white btn-ghost bg-primary px-5 py-3 rounded-md font-extrabold text-xl" href="">Get Started </a></button>
        </div>
        <div>
            <img className="lg:max-w-[808px] max-h-[520px]" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
