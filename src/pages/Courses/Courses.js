import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import Rightside from "./Rightside";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const [onlyCourses, setOnlyCourses] = useState([]);
  const [click, setClick] = useState("");

  const courses = useLoaderData();

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setOnlyCourses(data));
  }, []);

  console.log(onlyCourses);

  const handleClick = (click) => {
    setClick(click);
  };

  return (
    <div>
      <div className="w-4/12 m-auto">
        <h2 className="text-2xl text-center md:text-left pl-2">{click}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <div className="bg-red-400 my-2 md:pl-32 text-center md:text-left">
          <h2>category:{categories.length}</h2>

          <div className="">
            {categories.map((category) => (
              <p
                onClick={() => handleClick(category.name)}
                className=""
                key={category.id}
              >
                <Link to={`/courses/${category.id}`}>{category.name}</Link>
              </p>
            ))}
          </div>
        </div>

        <div className="col-span-2 my-2 bg-sky-300 lg:grid grid-cols-2 <gap-4">
          {courses ? (
            <>
              {courses?.map((course) => (
                <Category course={course} key={course.id}></Category>
              ))}
            </>
          ) : (
            <>
              {onlyCourses?.map((course) => (
                <div key={course.id}>
                  {course.title} {course.rating.number}
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
