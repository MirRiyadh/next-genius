import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ course }) => {
  const { image_url, title, price, sales, rating, course_name, id } = course;

  return (
    <div className="">
      <div className="bg-red-300 p-3">
        <img className="w-96" src={image_url} />
        <h3 className="text-xl">{title}</h3>
        <span className="flex items-center ">
          <FaStar className="mr-1"></FaStar> {rating.number}
        </span>
        <p>${price}</p>
        <button className="px-4 py-2 bg-white">
          <Link to={`/courses-details/${id}`}>See details</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Category;
