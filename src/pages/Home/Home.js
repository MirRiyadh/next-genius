import React from "react";
import Banner from "./shared/Banner/Banner";
import Community from "./shared/Community/Community";
import Instructor from "./shared/Instructor/Instructor";
import NewsLetter from "./shared/NewsLetter/NewsLetter";

import TopCategory from "./shared/TopCategory/TopCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCategory></TopCategory>
      <Community></Community>
      <Instructor></Instructor>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
