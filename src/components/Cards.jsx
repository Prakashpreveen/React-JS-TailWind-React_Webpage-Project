import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[8rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 sm:mx-4 md:mx-auto ">
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="font-bold text-2xl text-center py-4 ">Single User</h2>
          <p className="text-center text-4xl font-bold py-4">$149</p>
          <div className="flex flex-col items-center gap-2 text-xl">
            <p className="py-2 pt-4 border-b border-t w-full text-center">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-b-gray-300 w-full text-center">
              1 Granted User
            </p>
            <p className="py-2 border-b border-b-gray-300 w-full text-center">
              Send up to 2 GB
            </p>
          </div>
          <button className="bg-[#00df9a] mx-auto my-4 font-bold text-xl py-2 px-6 rounded-lg">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-2xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="font-bold text-2xl text-center py-4 ">Double User</h2>
          <p className="text-center text-4xl font-bold py-4">$269</p>
          <div className="flex flex-col items-center gap-2 text-xl">
            <p className="py-2 pt-4 border-b border-b-black border-t border-t-black w-full text-center">
              1 TB Storage
            </p>
            <p className="py-2 border-b border-b-black w-full text-center">
              2 Granted User
            </p>
            <p className="py-2 border-b border-b-black w-full text-center">
              Send up to 10 GB
            </p>
          </div>
          <button className="bg-black mx-auto my-4 font-bold text-xl text-[#00df9a] py-2 px-6 rounded-lg">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-2xl flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="font-bold text-2xl text-center py-4 ">Triple User</h2>
          <p className="text-center text-4xl font-bold py-4">$359</p>
          <div className="flex flex-col items-center gap-2 text-xl">
            <p className="py-2 pt-4 border-b border-t w-full text-center">
              2 TB Storage
            </p>
            <p className="py-2 border-b border-b-gray-300 w-full text-center">
              3 Granted User
            </p>
            <p className="py-2 border-b border-b-gray-300 w-full text-center">
              Send up to 20 GB
            </p>
          </div>
          <button className="bg-[#00df9a] mx-auto my-4 font-bold text-xl py-2 px-6 rounded-lg">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
