import React from "react";
import Banner from "../../components/Banner/Banner";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import AboutHome from "../../components/home/aboutHome/aboutHome";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <AboutHome />
      <BestSellers />
    </div>
  );
};

export default Home;
