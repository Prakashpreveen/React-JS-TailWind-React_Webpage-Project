import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex justify-center flex-col">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            iure voluptate? Sint impedit ex commodi minus aliquam officiis ipsum
            harum vel laudantium dolorum, blanditiis sit reiciendis architecto
            facere inventore itaque eius beatae sapiente tempore incidunt quis
            iusto amet quisquam! Id error ipsum iste! Sunt commodi animi eveniet
            totam, rerum beatae.
          </p>
          <button className="bg-[#000] text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 px-6 py-3 my-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
