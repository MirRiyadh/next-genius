import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const courses = useLoaderData();

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <div className="bg-red-400 my-2 md:pl-32 text-center md:text-left">
          <h2>category:{categories.length}</h2>

          <div>
            {categories.map((category) => (
              <p key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="col-span-2 my-2 bg-sky-300 lg:grid grid-cols-2 gap-4">
          {courses.map((course) => (
            <Category key={course.id} course={course}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
