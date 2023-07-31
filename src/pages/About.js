import React from "react";
import bg from "../assets/charging4.jpg";
import CountUp from "react-countup";
import { AiOutlineCar } from "react-icons/ai";
import { PiChargingStationFill } from "react-icons/pi";
import { BiSolidLeaf } from "react-icons/bi";
import { BsTools } from "react-icons/bs";

function About() {
  return (
    <div className="grid w-full h-screen md:flex justify-evenly items-center">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#87bf30] font-bold">
              <CountUp end={20} />+
            </h1>
            <h1 className="my-1 font-light">YEARS OF EXPERIANCE</h1>
            <div class="w-44 h-0.5 bg-slate-300 my-4"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#87bf30] font-bold">
              <CountUp end={50} />+
            </h1>
            <h1 className="my-1 font-light">SERVICE STATIONS</h1>
            <div class="w-44 h-0.5 bg-slate-300 my-4"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#87bf30] font-bold">
              <CountUp end={20} />K
            </h1>
            <h1 className="my-1 font-light">YEARS OF EXPERIANCE</h1>
            <div class="w-44 h-0.5 bg-slate-300 my-4"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#87bf30] font-bold">
              <CountUp end={45} />+
            </h1>
            <h1 className="my-1 font-light">YEARS OF EXPERIANCE</h1>
            <div class="w-44 h-0.5 bg-slate-300 my-4"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-7">
        <img src={bg} className="w-64 h-96 rounded-lg" alt="Background" />
      </div>
      <div>
        <h1 className="text-[#87bf30] text-lg">About Edvex</h1>
        <div className="flex ">
          <div class="w-1 h-28 bg-[#87bf30] my-2 mr-4"></div>
          <div className="text-4xl font-extrabold">
            <h1>Reliable Solution For</h1>
            <h1>All EV Charging</h1>
            <h1>Programs!</h1>
          </div>
        </div>
        <p className="text-[#777973] w-96 my-4">
          Remember that using inline styles might not be the most recommended
          approach if you're using Tailwind CSS, as it's best to leverage
          Tailwind's utility classes whenever possible for consistency and
          maintainability.
        </p>
        <div class="w-96 h-0.5 border-dotted border-2 border-slate-300 my-4"></div>

        <div class="grid mb-8  rounded-lg shadow-sm  md:mb-12 md:grid-cols-2">
          <figure class="flex flex-col items-center justify-center p-4 text-center bg-[#f5f5f5]  rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 ">
            <blockquote class="max-w-2xl mx-auto my-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <div className="flex items-center justify-center">
                <AiOutlineCar className="w-7 h-7 text-[#87bf30]" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Spare Parts Managment
              </h3>
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-center p-4 text-center bg-white  rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto my-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <div className="flex items-center justify-center">
                <PiChargingStationFill className="w-7 h-7 text-[#87bf30]" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Fast DC Charging
              </h3>
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-center p-4 text-center bg-white  rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto my-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <div className="flex items-center justify-center">
                <BiSolidLeaf className="w-7 h-7 text-[#87bf30]" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Warranty Extention
              </h3>
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-center p-4 text-center bg-[#f5f5f5]  rounded-br-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto my-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <div className="flex items-center justify-center">
                <BsTools className="w-6 h-6 text-[#87bf30]" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Maintainance
              </h3>
            </blockquote>
          </figure>
        </div>
        <button className="p-2 md:my-0 my-2 bg-[#87bf30] rounded-full text-white font-bold text-sm">
          About More
        </button>
      </div>
    </div>
  );
}

export default About;
