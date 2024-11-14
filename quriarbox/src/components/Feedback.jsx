import React from "react";
import girl from "../assets/girlSendPaper.png";
const Feedback = () => {
  return (
    <div className="bg-[#FFF1DC] pt-72">
      <div className="max-w-[1320px] mx-auto ">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img className="ml-8" src={girl} alt="" />
              <h1 className="text-2xl font-bold text-primary">
                REQUEST A CALLBACK
              </h1>
              <p className="pt-5 pb-2 text-4xl font-extrabold text-[#222132]">
                We will contact in the shortest time.
              </p>
              <p className="text-gray-500 font-semibold text-2xl">
                Monday to Friday, 9am-5pm.
              </p>
            </div>
            <div className="card  w-full max-w-sm shrink-0 ">
              <form className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered "
                    r
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered my-4"
                  />
                </div>
                <div className="form-control">
                  <textarea
                    className="textarea textarea-bordered h-[140px] w-full max-w-xs mb-10"
                    h
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-primary text-white font-extrabold">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
