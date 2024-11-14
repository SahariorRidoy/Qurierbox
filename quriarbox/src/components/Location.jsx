import React from "react";
import map from '../assets/map.png'
import location from '../assets/location.png'
import clock from '../assets/clock.png'
import mail from '../assets/mail.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import tweeter from '../assets/tweeter.png'
import call from '../assets/call.png'
const Location = () => {
  return (
    <div className="bg-[#FFF1DC] pt-48">
      <div className="max-w-[1320px] mx-auto ">
        <div>
            <h2 className="font-bold text-primary text-3xl text-center">FIND US</h2>
            <h2 className="text-[#222132] text-4xl font-extrabold text-center">Access us easily</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-20">
            <img src={map} alt="" />
            <div className="lg:pl-0 pl-5">
                <h3 className="text-gray-800 font-bold text-xl mb-10">Contact with us</h3>
                <div className="flex items-center gap-3 ml-[-3px]">
                    <img src={location} alt="" />
                    <p className="text-gray-700">2277 Lorem Ave, San Diego, CA 22553</p>
                </div>
                <div className="flex items-center gap-3">
                    <img src={clock} alt="" />
                    <p className="text-gray-700 my-4">Monday - Friday: 10 am - 10pm
                    Sunday: 11 am - 9pm</p>
                </div>
                <div className="flex items-center gap-3 ">
                    <img src={mail} alt="" />
                    <p className="text-gray-700">info@quriarbox.com</p>
                </div>
                <div className="pt-12 flex gap-6">
                    <img src={fb} alt="" />
                    <img src={insta} alt="" />
                    <img src={tweeter} alt="" />
                </div>
            </div>
        </div>
        <div className="flex justify-center pt-8">
            <button className="bg-primary btn-ghost rounded-md py-6  px-2 lg:px-28 text-white flex items-center gap-3 text-xl font-bold"><img src={call} alt="" />Call us to delivery  123-456789</button>
        </div>

      </div>
    </div>
  );
};

export default Location;
