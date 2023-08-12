import React from "react";
import tester from "../assets/charger_tester_2-removebg.png";
import ccs from "../assets/ccs2-removebg.png";
import cable from "../assets/charging_cable-removebg-preview.png";

function Products() {
  return (
    <div name="products" className="md:h-screen bg-slate-100 md:flex flex-col justify-evenly">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mt-10 mb-10 md:mt-0">Products</h1>
      </div>
      <div className="grid w-full  md:flex flex-row items-center justify-evenly">
        <div className="flex flex-col items-center">
          <div className="w-56 h-72 rounded-xl bg-[white] drop-shadow-2xl skew-y-3 origin-bottom-left flex justify-center items-center">
            <img src={tester} />
          </div> 
          <h1 className="font-bold text-lg mt-5">Public Charging Tester</h1>
          <p className="font-medium text-base mt-2 mb-2">$79</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-56 h-72 rounded-xl bg-[white] drop-shadow-2xl skew-y-3 origin-bottom-left flex justify-center items-center">
            <img src={ccs} />
          </div>
          <h1 className="font-bold text-lg mt-5">Rapid Electric Connector</h1>
          <p className="font-medium text-base mt-2 mb-2">$239</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-56 h-72 rounded-xl bg-[white] drop-shadow-2xl skew-y-3 origin-bottom-left flex justify-center items-center">
            <img src={tester} />
          </div>
          <h1 className="font-bold text-lg mt-5">Cash Counter</h1>
          <p className="font-medium text-base mt-2 mb-2">$789</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-56 h-72 rounded-xl bg-[white] drop-shadow-2xl skew-y-3 origin-bottom-left flex justify-center items-center">
            <img src={cable} />
          </div>
          <h1 className="font-bold text-lg mt-5">Electric Charging Cable</h1>
          <p className="font-medium text-base mt-2 mb-2">$39</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
