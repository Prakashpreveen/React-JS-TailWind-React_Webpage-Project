import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white px-2">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Data.
        </h1>
        <div className="flex items-center justify-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Fast, Flexible, Financing for
          </p>
          <div>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto px-6 py-3 text-black my-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
