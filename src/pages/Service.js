import React from "react";

function Service() {
  return (
    <div className="bg-gradient-to-r from-sky-800 to-teal-700">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-extrabold mt-10 text-white tracking-wide">
          Excellent &{" "}
          <span className="bg-white text-black rounded-md tracking-wide">
            Best Services
          </span>
        </h1>
        <h1 className="text-white mt-3 text-lg">Our Services</h1>
      </div>
      <div className="grid w-full sm:h-screen sm:flex flex-col justify-evenly">
        <div className="grid sm:flex justify-evenly">
          <div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold text-lg">
                  01
                </div>
                <h1 className="text-white font-bold text-xl ml-4">
                  AC Charger Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold text-lg">
                  02
                </div>
                <h1 className="text-[white] font-bold text-xl ml-4">
                  EV Drivers Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold text-lg">
                  03
                </div>
                <h1 className="text-white font-bold text-xl ml-4">
                  Charge Point Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
          </div>

          <div>image</div>

          <div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold text-lg">
                  04
                </div>
                <h1 className="text-white font-bold text-xl ml-4">
                  DC Charger Services
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold text-lg">
                  05
                </div>
                <h1 className="text-[white] font-bold text-xl ml-4">
                  Home Charging
                </h1>
              </div>
              <p className="text-[#bcced3] w-60 mt-2 font-normal">
                Ensure that you have included the Tailwind CSS library
              </p>
            </div>
            <div className="my-10">
              <div className="flex">
                <div className="bg-[#12836a] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold text-lg">
                  06
                </div>
                <h1 className="text-white font-bold text-xl ml-4">
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
