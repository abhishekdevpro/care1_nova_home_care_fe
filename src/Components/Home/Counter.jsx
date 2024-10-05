import React from "react";
import { FaPlay } from "react-icons/fa";
import banner from '../../assests/banner.jpg'

const Counter = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-800 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white text-teal-600 rounded-full cursor-pointer">
            <FaPlay className="text-2xl" />
          </div>
        </div>
        <p className="uppercase tracking-widest text-sm font-semibold">
          We Are Concerned Every Day
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Our Purpose In Life Is To Help One Another
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          We are dedicated to providing compassionate support and meeting
          everyone’s needs with respect and care.
        </p>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex flex-row justify-center items-center  flex-wrap gap-2 md:gap-8 text-center text-white">
          <div>
            <h3 className="text-xl md:text-4xl font-bold">25+</h3>
            <p className="text-sm font-semibold">Years Of Experience</p>
          </div>
          <div>
            <h3 className="text-xl md:text-4xl font-bold">15+</h3>
            <p className="text-sm font-semibold">Senior Persons</p>
          </div>
          <div>
            <h3 className="text-xl md:text-4xl font-bold">50+</h3>
            <p className="text-sm font-semibold">Doctors & Nurse</p>
          </div>
          <div>
            <h3 className="text-xl md:text-4xl font-bold">15K</h3>
            <p className="text-sm font-semibold">Best Clients Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
