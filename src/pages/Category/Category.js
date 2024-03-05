import React from "react";
import { FaBook, FaBookmark, FaClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ course }) => {
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
  } = course;

  return (
    <div className="card  bg-base-100 shadow-xl mx-4 mb-4 border rounded-md">
      <figure>
        <img className="w-full p-3" src={image_url} />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-500">{shortDetails}</p>
        <p className="text-3xl font-bold">${price}</p>
        <div className="flex justify-between">
          <div>
            <p className="flex items-center font-semibold mb-1 ">
              <FaStar className="mr-1 text-yellow-500" />
              {rating.number} ({rating.badge})
            </p>
            <p className="flex items-center font-semibold ">
              <FaClock className="mr-1 text-green-600" />
              {hours}/hr
            </p>
          </div>
          <div>
            <p className="flex items-center font-semibold ">
              <FaBookmark className="mr-1 text-sky-500" />
              {sales}
            </p>
          </div>
        </div>

        <hr />
        <div className="card-actions justify-between items-center">
          <img className="w-8 h-8 shadow rounded-full" src={author.img} />{" "}
          <p className="font-semibold text-slate-700"> {author.name}</p>
          <button className=" py-2 px-5 bg-indigo-400 hover:bg-indigo-600  rounded-md font-semibold flex items-center text-white font-bold">
            <Link to={`/courses-details/${id}`}>Details Link </Link>
            <FaBook className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
