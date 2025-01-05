import React from "react";
import Intro from "../components/intro";
import Title from "../components/title";
import WorkSection from "../components/section/work";
import Footer from "../components/footer";
import Techs from "../components/section/tech";
import ProjectSection from "../components/section/projects";
import Tools from "../components/section/tools";

const Home = () => {
  return (
    <>
      <Title />
      <Intro />
      <Techs />
      <Tools />
      <WorkSection />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default Home;
