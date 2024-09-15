"use client";
import { Fragment, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { ProjectsData } from "../portfolio-data/ProjectItems";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const Projects = () => {
  // Correctly initialize the scrollContainer with a type
  const scrollContainer = useRef(null);

  const handleScroll = (scrollAmount) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Fragment>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
          <FaLaptopCode /> Projects
        </h2>

        {/* Horizontal scrollable container */}
        <div
          className="flex gap-5 py-4 px-6 pl-20 space-x-4 overflow-x-auto scroll-container"
          ref={scrollContainer}
        >
          {ProjectsData.map((project) => (
            <div
              key={project.name}
              className="relative w-[375px] h-[700px] flex-shrink-0 cursor-pointer bg-cover bg-center rounded-3xl hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
              onClick={() => console.log(`Open modal for ${project.name}`)}
            >
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6 rounded-t-3xl">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 py-4 text-4xl ">
          <button className="p-2 hover:scale-[1.2] transition-all duration-500" onClick={() => handleScroll(-410)}>
            <FaChevronCircleLeft/>
          </button>
          <button className="p-2 hover:scale-[1.2] transition-all duration-500" onClick={() => handleScroll(410)}>
            <FaChevronCircleRight/>
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
