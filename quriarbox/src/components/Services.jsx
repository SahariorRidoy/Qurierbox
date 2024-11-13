import React from "react";
import servicesOne from "../assets/serviceOne.svg";
import servicesTwo from "../assets/serviceTwo.svg";
import servicesThree from "../assets/serviceThree.svg";
const Services = () => {
  return (
    <div className="bg-[#FFF1DC] pb-48">
      <div className="max-w-[1320px] mx-auto ">
        <div>
          <h2 className="text-primary text-3xl font-bold text-center">
            SERVICES
          </h2>
          <h2 className="font-extrabold text-4xl text-center text-[#11111D] mb-20">
            Our services for you
          </h2>
        </div>
        {/* Cards */}
        <div className="flex justify-between gap-4">

          <div className="px-12 pt-16 pb-12">
            <div className="flex justify-center">
              <img src={servicesOne} alt="" />
            </div>
            <h2 className="font-extrabold text-2xl text-gray-800 my-8 text-center">
              Business Services
            </h2>
            <p className="text-gray-600 max-w-[300px]">
              We give you complete reliable delivery for your company. We will
              take full responsibility of the deliveries.
            </p>
            <ul className="text-gray-600 list-disc ml-4 mb-14 mt-8">
              <li className="text-primary">
                <span className="text-gray-600">Corporate goods</span>
              </li>
              <li className="text-primary my-3">
                <span className="text-gray-600 ">Shipment</span>
              </li>
              <li className="text-primary">
                <span className="text-gray-600">Accessories</span>
              </li>
            </ul>

            <button
              className="text-primary px-5 py-3 border border-primary rounded-md w-full font-bold text-xl hover:bg-primary hover:text-white"
              href=""
            >
              Learn more
            </button>
          </div>
          <div className="px-12 pt-16 pb-12">
            <div className="flex justify-center">
              <img src={servicesTwo} alt="" />
            </div>
            <h2 className="font-extrabold text-2xl text-gray-800 my-8 text-center">
            Statewide Services
            </h2>
            <p className="text-gray-600 max-w-[300px]">
              We give you complete reliable delivery for your company. We will
              take full responsibility of the deliveries.
            </p>
            <ul className="text-gray-600 list-disc ml-4 mb-14 mt-8">
              <li className="text-primary">
                <span className="text-gray-600">Corporate goods</span>
              </li>
              <li className="text-primary my-3">
                <span className="text-gray-600 ">Shipment</span>
              </li>
              <li className="text-primary">
                <span className="text-gray-600">Accessories</span>
              </li>
            </ul>

            <button
              className="text-primary px-5 py-3 border border-primary rounded-md w-full font-bold text-xl hover:bg-primary hover:text-white"
              href=""
            >
              Learn more
            </button>
          </div>
          <div className="px-12 pt-16 pb-12">
            <div className="flex justify-center">
              <img src={servicesThree} alt="" />
            </div>
            <h2 className="font-extrabold text-2xl text-gray-800 my-8 text-center">
            Personal Services
            </h2>
            <p className="text-gray-600 max-w-[300px]">
              We give you complete reliable delivery for your company. We will
              take full responsibility of the deliveries.
            </p>
            <ul className="text-gray-600 list-disc ml-4 mb-14 mt-8">
              <li className="text-primary">
                <span className="text-gray-600">Corporate goods</span>
              </li>
              <li className="text-primary my-3">
                <span className="text-gray-600 ">Shipment</span>
              </li>
              <li className="text-primary">
                <span className="text-gray-600">Accessories</span>
              </li>
            </ul>

            <button
              className="text-primary px-5 py-3 border border-primary rounded-md w-full font-bold text-xl hover:bg-primary hover:text-white"
              href=""
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
