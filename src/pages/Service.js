import React from "react";
import charging from "../assets/charging3.jpg"
import "../App.css"

function Service() {
  return (
    <div name="services"
    //  className="bg-gradient-to-r from-sky-800 to-teal-700"
     className="bg-[#162c53] md:h-[800px]"
    >
      <div className="flex flex-col items-center ">
        <h1 className="md:text-2xl text-xl font-extrabold mt-10  text-white tracking-wide">
          Excellent &{" "}
          <span className="bg-white text-black rounded-md tracking-wide">
            Best Services
          </span>
        </h1>
        <h1 className="text-white mt-3 md:text-lg text-base">Our Services</h1>
      </div>
      <div className="grid w-full sm:h-screen sm:flex flex-col justify-evenly">
        <div className="grid sm:flex justify-evenly">
          <div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center text-white font-semibold md:text-lg text-sm">
                  01
                </div>
                <h1 className="text-white font-bold md:text-xl text-lg ml-4">
                  AC Charger Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center text-white font-semibold md:text-lg text-sm">
                  02
                </div>
                <h1 className="text-[white] font-bold md:text-xl text-lg ml-4">
                  EV Drivers Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center text-white font-semibold md:text-lg text-sm">
                  03
                </div>
                <h1 className="text-white font-bold md:text-xl text-lg ml-4">
                  Charge Point Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <img src={charging} className="w-52 h-72 rounded-bl-3xl rounded-tr-3xl shadow-custom-color"/>
          </div>

          <div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center text-white font-semibold md:text-lg text-sm">
                  04
                </div>
                <h1 className="text-white font-bold md:text-xl text-lg ml-4">
                  DC Charger Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center text-white font-semibold md:text-lg text-sm">
                  05
                </div>
                <h1 className="text-[white] font-bold md:text-xl text-lg ml-4">
                  Home Charging
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center text-white font-semibold md:text-lg text-sm">
                  06
                </div>
                <h1 className="text-white font-bold md:text-xl text-lg ml-4">
                  Building Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
