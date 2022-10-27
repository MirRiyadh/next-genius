import React from "react";
import "./Instructor.css";
import photo1 from "../../../../assets/photos/instructor-1.jpg";
import photo2 from "../../../../assets/photos/instructor-2.jpg";
import photo3 from "../../../../assets/photos/instructor-3.jpg";
import photo4 from "../../../../assets/photos/instructor-4.jpg";

const Instructor = () => {
  return (
    <div className="instructor-container mt-8 md:mt-16 text-center text-white">
      <div className="text-4xl font-semibold  py-4 text-white">
        Meet Our Instructor
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-6/12 md:w-11/12 m-auto py-5 ">
        <div className="...">
          <img className="h-56 lg:h-96 rounded-md" src={photo1} alt="" />
          <p className="font-bold">Alex Morgan</p>
          <p>Web Development</p>
        </div>
        <div className="...">
          <img className="h-56 lg:h-96 rounded-md" src={photo2} alt="" />
          <p className="font-bold">Sara M. Anderson</p>
          <p>Artificial Intelligence</p>
        </div>
        <div className="...">
          <img className="h-56 lg:h-96 rounded-md" src={photo3} alt="" />
          <p className="font-bold">Louis H. Allen</p>
          <p>React Instructor</p>
        </div>
        <div className="...">
          <img className="h-56 lg:h-96 rounded-md" src={photo4} alt="" />
          <p className="font-bold">Jennifer Rosario</p>
          <p>Data Science</p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
