import React from "react";
import PageNews from "../component/PagesNews";
import PageSlide from "../component/PageSlide";
import PagesLikes from './../component/PagesLikes';

const LandingPage = () => {
  return (
    <div className="bg-[#F2F9FF] min-h-screen">
      {/* Slide Section */}
      <div className="mt-24 mb-8 bg-[#F2F9FF]">
        <PageSlide />
      </div>

      {/* Likes Section */}
      <div className="mb-8 bg-[#F2F9FF]">
        <PagesLikes />
      </div>

      {/* News Section */ }
      <div>
        <PageNews />
      </div>
    </div>
  );
};

export default LandingPage;
