import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  busSystemImg,
  companywebImg,
  ecommerceImg,
  ecommerceApp,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY WORKS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des=" I had the pleasure of working with E+up software company as our e-commerce website developer."
          src={ecommerceImg}
        />
        <ProjectsCard
          title="stock Website"
          des=" The stock market is a financial market where buyers and sellers trade shares of publicly held companies."
          src={projectTwo}
        />
        <ProjectsCard
          title="Digital address"
          des=" Digital address is a unique identifier associated with a specific location or entity in the digital realm."
          src={projectThree}
        />
        <ProjectsCard
          title="company website"
          des=" Companys website involves various strategies aimed at increasing its visibility, attracting visitors, and
           achieving specific goals. I made 6 company website."
          src={companywebImg}
        />
        <ProjectsCard
          title="E-commerce App"
          des=" 
          Developing an e-commerce app using React Native allows you to create a cross-platform application with a single codebase that runs on both iOS and Android platforms."
          src={ecommerceApp}
        />
        <ProjectsCard
          title="bus reservation system"
          des=" it's serve as a crucial online presence, providing information about a business,
           its products or services, and establishing a digital hub for customer interaction."
          src={busSystemImg}
        />
      </div>
    </section>
  );
};

export default Projects;
