import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div class="flex flex-col items-center mt-40 ">
        <div class="text-indigo-500 font-bold text-7xl">404</div>

        <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
          This page does not exist
        </div>

        <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
          The page you are looking for could not be found.
        </div>

        <Link to="/">
          <button className="px-4 py-2 bg-indigo-400 mt-4 font-bold text-white hover:bg-indigo-600">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
