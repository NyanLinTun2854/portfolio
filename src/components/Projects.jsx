import React from "react";
import ProjectCard from "./ProjectCard";
import bootstraptheme from "../img/projects/bootstraptheme.png";
import ecommerce from "../img/projects/ecommerce.png";
import cloud from "../img/projects/cloud.png";
import fitness from "../img/projects/fitness.png";
import youtube from "../img/projects/youtube.png";
import crud from "../img/projects/crud.png";

const Projects = () => {
  return (
    <section
      id="projects"
      name="projects"
      className="pt-[70px] md:pt-[90px] lg:pt-[125px] pb-[80px] md:pb-[100px] lg:pb-[130px]"
    >
      <div className="container mx-auto relative">
        <div className="w-[90%] mx-auto">
          <div className="w-full lg:w-[60%] mr-auto text-start">
            <h3 className="text-[30px] md:text-[45px] font-[700] pb-[20px] leading-[1.2]">
              My Projects
            </h3>
            <p className="text-[15px] md:text-[16px] text-secondary leading-7">
              Implemented front-end functionality and interactions using HTML,
              CSS, and JavaScript and Integrated APIs and databases to enable
              data retrieval and storage using firebase.
            </p>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 pt-[50px]">
            {projects.map((project) => (
              <ProjectCard card={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const projects = [
  {
    title: "Bootstrap Theme",
    img: bootstraptheme,
    url: "https://wap-boomerang.netlify.app/",
    genre: "uitheme",
  },
  {
    title: "Ecommerce",
    img: ecommerce,
    url: "https://wap-ecommerce.netlify.app",
    genre: "ecommerce",
  },
  {
    title: "Youtube Project",
    img: youtube,
    url: "https://youtube-terces.netlify.app",
    genre: "webapp",
  },
  {
    title: "CRUD Project",
    img: crud,
    url: "https://crudnyan.netlify.app",
    genre: "crud",
  },
  {
    title: "Cloud UI Project",
    img: cloud,
    url: "https://cloud-managment.netlify.app",
    genre: "uitheme",
  },
  {
    title: "Fitness Project",
    img: fitness,
    url: "https://jocular-cajeta-9613e6.netlify.app",
    genre: "webapp",
  },
];
