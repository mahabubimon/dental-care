import React from "react";
import Banner from "../banner/Banner";
import Dentists from "../dentists/Dentists";
import Services from "../services/Services";
import HappySmiles from "../smiles/HappySmiles";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Dentists></Dentists>
      <HappySmiles></HappySmiles>
    </>
  );
};

export default Home;
