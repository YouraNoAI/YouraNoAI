import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard title="E-VOTING" des="Is a web-based voting application developed to support the 2025 election of the Computer Engineering Student Association chairman. The system was designed to simplify the voting process, ensure fair participation, and efficiently record election results." src={projectOne} />
        <ProjectsCard title="Multi Commerce" des=" Is a personal project focused on building an e-commerce application for electronic products. The app integrates the FakeStoreAPI to fetch and display product data, demonstrating API consumption and front-end development skills." src={projectTwo} />
        <ProjectsCard title="STUFAN" des=" STUFAN (STUDY FROM ANYWHERE) is an educational web application designed to support students in learning React.js. The platform presents learning materials in an interactive web-based format, making it easier for students to understand concepts without relying on traditional slide presentations." src={projectThree} />
        <ProjectsCard title="CODE STOCK" des="Is a web application built to manage daily student assignments, attendance, and progress tracking. The platform helps streamline task submissions, monitor student participation, and track learning activity in one centralized system." src={projectFour} />
        <ProjectsCard title="ALGIEZ STORE" des=" Is a simple web application designed to manage the buying and selling of accounts. The app was built for a client using basic CRUD operations to handle product data, transactions, and account management efficiently." src={projectFive} />
        <ProjectsCard title="FILTER SKORS" des=" Is a fun web application that generates a random score to determine how attractive a user is. Designed purely for entertainment, the app provides a lighthearted and playful experience without any real analysis or judgment." src={projectSix} />
      </div>
    </section>
  );
};

export default Projects;
