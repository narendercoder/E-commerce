import React from "react";
import FeatureProducts from "../Components/FeatureProducts";
import HeroSection from "../Components/HeroSection";
import Services from "../Components/Services";
import Trusted from "../Components/Trusted";

function Home() {
  const data = {
    name: "E-Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    </>
  );
}

export default Home;
