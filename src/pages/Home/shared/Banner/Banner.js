import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="pl-2 w-72 md:pl-32 lg:pl-64 md:w-7/12 lg:6/12 md:pt-6  lg:pt-28">
        <p className="font-semibold text-sky-600  py-2 font-text">
          BETTER LEARNING FUTURE WITH US
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold md:mb-2">
          Start Next Level Learning From Here
        </h1>
        <p className="hidden md:block text-slate-500">
          We offer the best courses and instructor to give the next level of
          learning stage
        </p>
        <button className="py-2 lg:py-3 px-6 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 mt-4 font-bold text-white rounded-md flex items-center shadow-lg shadow-gray-400">
          <Link to="/courses">
            <span className="mr-1"> Explore Courses</span>
          </Link>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
