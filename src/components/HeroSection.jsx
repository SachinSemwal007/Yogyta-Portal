import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="bg-[#043873] p-5 md:p-16 flex flex-col md:flex-row items-center justify-between min-h-screen relative"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        src="Element.png"
        alt="Background"
      />

      {/* Left Section */}
      <div className="flex flex-col gap-6 md:gap-10 items-start justify-start flex-1 z-10">
        {/* Text Section */}
        <div className="text-left">
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
            Get AI Assisted Employment
            <br />
            <span className="text-white text-3xl md:text-5xl font-semibold">
              for your Dream Roles
            </span>
          </h1>
          <p className="text-white text-sm md:text-base mt-4 leading-relaxed">
            Provide organizations with tested and certified candidates who fit
            their job roles seamlessly using artificial intelligence solutions.
          </p>
        </div>

        {/* Button Section */}
        <button className="bg-[#4f9cf9] hover:bg-blue-700 text-white text-sm md:text-base font-semibold py-3 px-6 rounded-lg flex items-center gap-2 mt-6">
          Get Started Now <FaArrowRight />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-shrink-0 w-full md:w-1/3 z-10 mt-10 md:mt-0">
        <img
          className="w-full h-auto"
          src="hero.gif"
          alt="Animation"
        />
      </div>
    </div>
  );
};

export default HeroSection;
