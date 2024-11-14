import React from "react";
import delivery from "../assets/deliveryBackgroundWithOverlay.png";
import play from "../assets/playIcon.png";
const Delivery = () => {
  return (
    <div className="bg-[#FFF1DC] mt-14 lg:mt-40 mb-20 lg:mb-44">
      <div className="max-w-[1320px] mx-auto ">
        <div
          className="hero bg-cover bg-no-repeat bg-center rounded-2xl lg:pt-32 py-10 lg:pb-40"
          style={{
            backgroundImage: `url(${delivery})`,
          }}
        >
          <div className=" bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <div className="flex justify-center ">
                <img className="btn-ghost cursor-pointer" src={play} alt="" />
              </div>
              <h1 className="mb-7 text-3xl font-bold mt-5 text-primary">FASTEST DELIVERY</h1>
              <p className="text-center text-2xl">
                You can get your valuable item in the fastest period of time
                with safety. Because your emergency is our first priority..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
