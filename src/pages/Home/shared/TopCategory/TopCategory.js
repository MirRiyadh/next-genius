import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ArtificialIntelligence from "../../../../assets/photos/ai.png";
import DataScience from "../../../../assets/photos/medical-research.png";
import MachineLearning from "../../../../assets/photos/robot.png";
import Python from "../../../../assets/photos/python.png";
import WebDevelopment from "../../../../assets/photos/coding.png";
import ReactLogo from "../../../../assets/photos/react.png";

const TopCategory = () => {
  return (
    <div className="mt-6 w-11/12 md:w-10/12 m-auto">
      <h1 className="py-3 lg:py-7 text-center font-bold text-2xl md:text-3xl lg:text-4xl md:text-left text-sky-500">
        Browse Popular Category
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6   gap-4   ">
        <div class="bg-rose-100 rounded-md">
          <div className=" flex flex-col items-center py-5">
            <div>
              <img src={ArtificialIntelligence} className="w-12" />
            </div>
            <h1 className=" font-semibold my-2 text-center">
              Artificial Intelligence
            </h1>
            <button className="text-2xl text-indigo-500 hover:text-purple-500">
              <Link to="/courses/02">
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
              </Link>
            </button>
          </div>
        </div>
        <div class="bg-sky-100 rounded-md">
          <div className=" flex flex-col items-center py-5">
            <div>
              <img src={DataScience} className="w-12" />
            </div>
            <h1 className=" font-semibold my-2 text-center">Data Science</h1>
            <button className="text-2xl text-indigo-500 hover:text-purple-500">
              <Link to="/courses/03">
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
              </Link>
            </button>
          </div>
        </div>
        <div class="bg-purple-100 rounded-md">
          <div className=" flex flex-col items-center py-5">
            <div>
              <img src={MachineLearning} className="w-12" />
            </div>
            <h1 className=" font-semibold my-2 text-center">
              Machine Learning
            </h1>
            <button className="text-2xl text-indigo-500 hover:text-purple-500">
              <Link to="/courses/04">
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
              </Link>
            </button>
          </div>
        </div>
        <div class="bg-yellow-100 rounded-md">
          <div className=" flex flex-col items-center py-5">
            <div>
              <img src={Python} className="w-12" />
            </div>
            <h1 className=" font-semibold my-2 text-center">Python</h1>
            <button className="text-2xl text-indigo-500 hover:text-purple-500">
              <Link to="/courses/05">
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
              </Link>
            </button>
          </div>
        </div>
        <div class="bg-emerald-100 rounded-md">
          <div className=" flex flex-col items-center py-5">
            <div>
              <img src={WebDevelopment} className="w-12" />
            </div>
            <h1 className=" font-semibold my-2 text-center">Web Development</h1>
            <button className="text-2xl text-indigo-500 hover:text-purple-500">
              <Link to="/courses/06">
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
              </Link>
            </button>
          </div>
        </div>
        <div class="bg-pink-200 rounded-md">
          <div className=" flex flex-col items-center py-5">
            <div>
              <img src={ReactLogo} className="w-12" />
            </div>
            <h1 className=" font-semibold my-2 text-center">React</h1>
            <button className="text-2xl text-indigo-500 hover:text-purple-500">
              <Link to="/courses/07">
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <button>
        <Link to="courses/02">click here</Link>{" "}
      </button>
    </div>
  );
};

export default TopCategory;
