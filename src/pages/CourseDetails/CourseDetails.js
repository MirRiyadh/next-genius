import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import cover from "../../assets/photos/cover.png";
import "./CourseDetails.css";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div>
      <div className=" px-10 m-auto img-container text-center md:text-left">
        <div></div>
        <div className="md:pl-16 md:pt-16 ">
          <h1 className="text-2xl text-white font-bold">
            Whats the important of quiz?
          </h1>

          <button className="bg-white mt-4 py-2 px-4 rounded-lg hover:bg-indigo-400 font-semibold hover:text-white">
            <Link to="/topics"> Choose Topics</Link>
          </button>
        </div>
      </div>
      <h1 className="text-5xl mt-16 underline ">Select Your Topics</h1>
      <div className="card-container mb-10"></div>
    </div>
  );
};

export default CourseDetails;
