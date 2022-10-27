import React from "react";
import { FaBookOpen, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import photo from "../../../../assets/photos/community.jpg";
const Community = () => {
  return (
    <div>
      <div className="mt-8 md:mt-24">
        <div className="grid md:grid-cols-2 gap-4 md:w-11/12 lg:w-8/12 m-auto">
          <div className="">
            <div>
              <img className="" src={photo} alt="" />
            </div>
          </div>
          <div className="">
            <div className="pt-6 text-center md:text-left">
              <h1 className="text-3xl lg:text-5xl font-semibold mb-3">
                Creating A Community Of Life Long Learners
              </h1>
              <p className="text-slate-500 text-xs lg:text-base ">
                Joining with us gives you additional earning potential. Some
                instructors have been able to leave their jobs to teach full
                time with us. It’s free to create and publish a course with us,
                and you earn revenue share for every paid enrollment. As a us
                instructor, you have the flexibility to offer your course for
                free (if it’s under 2 hours) or for a price you set — and you
                have the option to promote your course with our promotional
                pricing. Learn more about our instructor revenue sharing and how
                to maximize your earnings.
              </p>
              <div className="flex items-center justify-center md:justify-start mt-3 text-2xl text-indigo-600">
                <FaBookOpen />
                <span className="ml-2">Flexible Classes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-3 text-2xl text-indigo-600">
                <FaHome />
                <span className="ml-2">Learn From Anywhere</span>
              </div>
              <button className="py-2 px-4 bg-indigo-400 hover:bg-indigo-500 text-white mt-4 lg:mt-12 font-bold">
                <Link to="/courses">Enroll now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
