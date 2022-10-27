import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import Rightside from "./Rightside";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [categoriesname, setCategoriesName] = useState("");

  const courses = useLoaderData();

  useEffect(() => {
    fetch("https://assignment-ten-server-eight.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("https://assignment-ten-server-eight.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleCategoriesName = (categoriesname) => {
    setCategoriesName(categoriesname);
  };

  return (
    <div>
      <div className="w-4/12 m-auto">
        <h2 className="text-2xl text-center md:text-left pl-5 hidden md:block text-cyan-800 font-semibold my-3">
          {categoriesname}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 ">
        <div className=" my-2 md:pl-4 lg:pl-56 text-center md:text-left ">
          <h2 className="pl-5 font-semibold text-slate-500 text-xl">
            Categories:
          </h2>
          <hr className="md:w-32 mt-1 md:ml-5" />

          <div className="my-3 pl-5">
            {categories.map((category) => (
              <button
                onClick={() => handleCategoriesName(category.name)}
                className="my-1 mx-2 md:my-2 md:mx-0 py-2 px-3 inline-block md:block bg-sky-300 hover:bg-sky-400 rounded-sm mt-3 text-xs md:text-base font-semibold w-60  md:text-left m-auto "
                key={category.id}
              >
                <Link to={`/courses/${category.id}`}>{category.name}</Link>
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-2 my-2 lg:grid grid-cols-2 <gap-4">
          {courses ? (
            <>
              {courses?.map((course) => (
                <Category course={course} key={course.id}></Category>
              ))}
            </>
          ) : (
            <>
              {allCourses?.map((course) => (
                <div key={course.id}>
                  <Rightside course={course} key={course.id}></Rightside>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
