import React from "react";
import quote from "../assets/quoteIcon.png";
import rating from "../assets/ratingStars.png";
import clientsImg from "../assets/avatarGirl.png";
const Testimonial = () => {
  return (
    <div className="bg-[#FFF1DC]">
      <div className="max-w-[672px] mx-auto px-7">
        <div className="flex items-center gap-9">
          <img src={quote} alt="" />
          <div className="text-center">
            <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-2">
              TESTIMONIAL
            </h3>
            <h2 className="text-gray-950 font-extrabold text-3xl lg:text-4xl">
              Our Awesome Clients
            </h2>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold text-2xl mt-32 mb-3">
            Fantastic service!
          </h4>
          <p className="text-gray-800">
            I purchased a phone from an e-commerce site, and this courier
            service provider assisted me in getting it delivered to my home. I
            received my phone within one day, and I was really satisfied with
            their service when I received it. They are really quick and
            dependable. They give me with the option of real-time delivery
            status, which allows me to track the progress of my goods delivery.
            I get a lot of questions from call center support and key account
            managers. They come highly recommended. Confidently say that they
            are really reliable.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col mt-8 lg:mt-0 justify-between items-center">
          <img src={rating} alt="" />
          <div className="flex gap-3 items-center">
            <div className="mt-3">
              <h4 className="text-right font-bold text-gray-950">
                Yves Tanguy
              </h4>
              <h5 className="text-gray-800">Chief Executive, DLF</h5>
            </div>
            <div>
              <img className="mt-3" src={clientsImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
