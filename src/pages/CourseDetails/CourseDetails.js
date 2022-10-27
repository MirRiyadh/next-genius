import React from "react";
import {
  FaBookmark,
  FaStar,
  FaStarHalf,
  FaStarHalfAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

import "./CourseDetails.css";
import DownloadPdf from "./DownloadPdf/DownloadPdf";

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  const {
    image_url,
    title,
    price,
    sales,
    rating,
    course_name,
    id,
    shortDetails,
    hours,
    author,
    details,
  } = courseDetails;
  console.log(id, course_name);
  return (
    <div id="downloadPage">
      <div className=" px-10 m-auto img-container text-center md:text-left">
        <div></div>
        <div className="md:pl-16 md:pt-16 ">
          <button className="py-1 px-3 bg-cyan-300 font-semibold text-md mt-2 mr-2">
            {course_name}
          </button>
          <button>
            <DownloadPdf
              elementId="downloadPage"
              downloadFile="CourseDetails"
            ></DownloadPdf>
          </button>
          <h1 className=" text-2xl md:text-5xl font-bold mt-2">{title}</h1>
          <div>
            <div className="text-amber-400 mt-2 flex justify-center items-center md:justify-start">
              <div className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <FaStarHalfAlt />
              </div>
              <p className="ml-2 text-slate-700 font-semibold">
                {rating.number}
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start mt-1">
              <FaBookmark className="text-cyan-600" />{" "}
              <p className="font-semibold ml-1">Sales: {sales}</p>
            </div>
          </div>

          <button className=" mt-2 py-2 hover:bg-indigo-400 font-semibold hover:text-white text-4xl">
            <Link to="/topics"> ${price}</Link>
          </button>
          <p className="my-2 text-xs">{shortDetails}</p>
          <p className="my-2 text-md flex items-center justify-center md:justify-start">
            <FaUserGraduate />{" "}
            <span className="font-bold ml-1">{author.name}</span>{" "}
          </p>
          <button className="shadow-md mt-2 bg-white py-2 px-6 rounded-lg hover:bg-indigo-400 font-semibold hover:text-white text-2xl">
            <Link to={`/checkout/${id}`}>Enroll Now</Link>
          </button>
        </div>
      </div>

      {/* info section */}
      <div className="mt-5">
        <h1 className="text-center text-4xl underline text-sky-700 font-semibold">
          Course Detaills
        </h1>
        <div className=" m-auto mt-8 ">
          <img
            className="w-11/12 md:w-10/12 lg:w-7/12 m-auto shadow-md"
            src={image_url}
          />
        </div>
        <div className="w-11/12 md:w-10/12 lg:w-7/12 m-auto mt-3">
          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              Title:
            </span>{" "}
            {title}
          </p>
          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              Description:
            </span>{" "}
            {details}
          </p>
          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              ● Subject:
            </span>{" "}
            {course_name}
          </p>
          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              ● Videos:
            </span>{" "}
            60
          </p>
          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              ● Time:
            </span>{" "}
            {hours}/hr
          </p>

          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              ● Duration:
            </span>{" "}
            6 Weeks
          </p>
          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              ● Ratings:
            </span>{" "}
            {rating.number}
          </p>
          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              ● Students:
            </span>{" "}
            {sales}
          </p>
          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              ● Instructor:
            </span>{" "}
            {author.name}
          </p>

          <p className="text-gray-500 my-2">
            {" "}
            <span className="font-bold text-gray-600 text-base">
              ● Published Date:
            </span>{" "}
            {author.published_date}
          </p>
        </div>
        <div className="text-center text-4xl underline text-sky-700 font-semibold my-5">
          <button className="bg-indigo-400 hover:bg-indigo-500 text-white px-5 py-1">
            <Link to={`/checkout/${id}`}>Get Premium Access</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
