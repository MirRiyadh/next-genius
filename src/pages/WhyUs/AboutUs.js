import React from "react";
import imageOne from "../../assets/photos/airfocus-K_VeavYEfdA-unsplash.jpg";
import imageTwo from "../../assets/photos/jason-goodman-vbxyFxlgpjM-unsplash.jpg";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl underline text-cyan-700 my-2 md:pb-5">
        About Us
      </h1>
      <div className="grid md:grid-cols-2 gap-4 md:w-11/12 lg:w-8/12 m-auto">
        <div className="">
          <div className="pt-6 text-center md:text-left">
            <h1 className="text-3xl font-semibold mb-3">
              Expand your earning potential
            </h1>
            <p className="text-slate-500 text-xs lg:text-base ">
              Teaching with us gives you additional earning potential. Some
              instructors have been able to leave their jobs to teach full time
              with us. It’s free to create and publish a course with us, and you
              earn revenue share for every paid enrollment. As a us instructor,
              you have the flexibility to offer your course for free (if it’s
              under 2 hours) or for a price you set — and you have the option to
              promote your course with our promotional pricing. Learn more about
              our instructor revenue sharing and how to maximize your earnings.
            </p>
          </div>
        </div>
        <div className="">
          <div>
            <img className="shadow-xl" src={imageOne} alt="" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:w-11/12 lg:w-8/12 m-auto mt-5 md:mt-12 ">
        <div className="">
          <div>
            <img className="shadow-xl" src={imageTwo} alt="" />
          </div>
        </div>
        <div className="">
          <div className="pt-6 text-center md:text-left">
            <h1 className="text-3xl font-semibold mb-3">
              Teaching you the best way
            </h1>
            <p className="text-slate-500 text-xs lg:text-base ">
              You are welcome to share your knowledge on any topic with the
              exception of those noted on our list of restricted topics. With
              the best marketplace, you create and own your content, which means
              you can host the same content elsewhere, and you may also upload
              any courses or content that you’ve already created. Teach your
              way, Teaching online gives you an opportunity to potentially reach
              learners from around the world from the comfort of your home.
              Teaching with us allows for the flexibility to teach from
              anywhere, anytime.
            </p>
          </div>
        </div>

        <div className="ml-3">
          <h1 className="text-xl font-semibold">Extra features:</h1>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Affordable</li>
            <li>Free Courses</li>
            <li>30-day Refund Policy</li>
            <li>Lifetime Access</li>
            <li>Wide selection of courses</li>
            <li>Certificate at Completion</li>
          </ul>
          <h1 className="text-xl font-semibold">Who are we?</h1>
          <p className=" text-gray-600 mb-4">
            NextGenius is the biggest online learning platform offering 200,000+
            affordable online courses where users can learn new skills or
            improve existing ones. It offers courses on 11 categories from
            Business, Design, Music and much more. NextGenius’s courses are
            designed, created and published by independent instructors and
            learners pay for each individual course with a one-off payment. When
            you successfully complete a course, you will receive a certificate,
            but this certification isn’t officially verified by any external
            partner. Any NextGenius purchased course comes with lifetime access
            and a 30-day refund policy. There are also a bunch of free courses
            to get you started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
