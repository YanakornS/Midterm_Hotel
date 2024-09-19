import React from "react";
import PageNews from "../component/PagesNews";
import PageSlide from "../component/PageSlide";

import PagesLikes from './../component/PagesLikes';

const LandingPage = () => {
  return (
    <>
      <div className="  flex-col mt-24">
        <PageSlide />
      </div>

      <PagesLikes />
      <PageNews />
    </>
  );
};

export default LandingPage;
