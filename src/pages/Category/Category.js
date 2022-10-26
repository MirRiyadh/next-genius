import React from "react";
import { FaStar } from "react-icons/fa";
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
  } = course;

  return (
    <div className="card  bg-base-100 shadow-xl mx-4 mb-4 border rounded-md">
      <figure>
        <img className="w-full p-3" src={image_url} />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-500">{shortDetails}</p>
        <hr />
        <div className="card-actions justify-between items-center">
          <p>Author</p>
          <button className=" py-2 px-5 bg-slate-500 rounded-md font-semibold">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
