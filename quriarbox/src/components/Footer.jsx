import React from "react";
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className="bg-[#222132] mt-44">
      <div className="max-w-[1320px] mx-auto flex lg:flex-row flex-col justify-between items-center py-20">
        <div className="text-white lg:px-0 px-5">
          <h2 className="font-extrabold text-4xl">Get an update every week</h2>
          <p className="text-gray-300 max-w-lg">
            We ensure that your product is delivered in the safest possible
            manner, at the correct location, at the right time.
          </p>
        </div>
        <form className="">
          <h6 className="text-primary font-bold text-lg mb-3 lg:mt-0 mt-12">
            SUBSCRIBE TO NEWSLETTER
          </h6>
          <fieldset className="form-control w-80">
            <div className="gap-4 flex flex-col lg:flex-row justify-between ">
              <input
                type="text"
                placeholder="Enter your mail"
                className="input input-bordered bg-transparent border focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-1 border-gray-300 rounded-md lg:w-[386px]"
              />
              <button className="btn border-none  text-white bg-primary ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      {/* Footer middle parts */}
      <div className="bg-[#2F2E41]">
      <div className="max-w-[1320px] mx-auto footer p-10 flex lg:flex-row flex-col justify-between w-full">
        <aside className="text-white">
          <div className="flex gap-1 items-center">
          <img src={logo} alt="" />
          <h3 className="text-2xl">Quriarbox</h3>
          </div>
          <p className="text-gray-500 font-semibold">
          The most trusted Courier
          <br />
          company in your area.
          </p>
        </aside>
        <div className="flex lg:flex-row flex-col gap-8  justify-between w-1/2 text-[#9291A1]"> 
        <nav className="flex flex-col">
          <h6 className="font-bold text-white text-xl mb-6">Other links</h6>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Movers website</a>
          <a className="link link-hover">Traffic Update</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="font-bold text-white text-xl mb-6">Services</h6>
          <a className="link link-hover">Corporate goods</a>
          <a className="link link-hover">Artworks</a>
          <a className="link link-hover">Documents</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="font-bold text-white text-xl mb-6">Legal</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Get Update</a>
        </nav>
        </div>
      </div>
      </div>
      {/* Footer last parts */}
      <div className="bg-[#222132] py-7 lg:px-0 px-5">
        <div className="max-w-[1320px] mx-auto flex lg:flex-row flex-col gap-2 justify-between">
          <p className="text-xs text-gray-200">All rights Reserved © Dream IT Solution, 2024</p>
          <p className="text-xs text-gray-200 ">Made with heart by <span className="text-primary">Saharior Ridoy</span></p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
