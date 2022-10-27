import React from "react";

const Footer = () => {
  return (
    <div className="pt-20">
      <div className=" bg-gradient-to-b from-sky-400 to-sky-200 ">
        <div className="max-w-xl mx-auto text-black py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3 font-bold">
              {" "}
              Download Our NextGenius App{" "}
            </h3>
            <p> Learn easily and enjoy your life. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-black ">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-black ">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row md:justify-between items-center text-sm text-black">
            <p className="order-2 md:order-1 mt-8 md:mt-0 text-black font-semibold ">
              {" "}
              &copy; NextGenius, 2022.{" "}
            </p>
            <div className="order-1 md:order-2 text-black font-semibold">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
