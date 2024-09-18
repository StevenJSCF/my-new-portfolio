"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { ProjectsData } from "../portfolio-data/ProjectItems";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const Projects = () => {
  // Correctly initialize the scrollContainer with a type
  const scrollContainer = useRef(null);
  const projectTittleRef = useRef();
  const projectRef = useRef();
  const projectBoxesRef = useRef();
  const [isProject, setIsProject] = useState(false);

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const projectObserver = new IntersectionObserver(
      ([projectEntry]) => {
        setIsProject(projectEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    projectObserver.observe(projectRef.current);

    if (isProject) {
      projectTittleRef.current.classList.add("pop-up-tittle");
      projectBoxesRef.current.classList.add("pop-up-1");
    } else {
      projectTittleRef.current.classList.remove("pop-up-tittle");
      projectBoxesRef.current.classList.remove("pop-up-1");
    }
  }, [isProject]);

  const handleScroll = (scrollAmount) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
        ref={projectRef}
        id="project"
      >
        <div className="pop-down-tittle" ref={projectTittleRef}>
          <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
            <FaLaptopCode /> Projects
          </h2>
        </div>

        {/* Horizontal scrollable container */}
        <div
          className="flex gap-5 py-4 px-6 pl-20 space-x-4 overflow-x-auto scroll-container"
          ref={scrollContainer}
        >
          <div className="pop-down-1 flex" ref={projectBoxesRef}>
            {ProjectsData.map((project) => (
              <div
                key={project.name}
                className="flex flex-col items-center w-[375px] flex-shrink-0 cursor-pointer rounded-3xl hover:scale-105 transition-transform duration-500 shadow-md shadow-black dark:shadow-white"
                style={{
                  margin: "10px", // Add a margin to create space between the projects
                }}
                onClick={() => console.log(`Open modal for ${project.name}`)}
              >
                <div className="bg-gray-400 text-white p-6 rounded-t-3xl w-full text-center">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <div className="flex gap-1 mt-1 flex-wrap justify-center">
                    {project.techStack.map((tech) => (
                      <p
                        className="px-1 text-sm rounded bg-blue-500 text-white"
                        key={tech}
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
                <div
                  className="relative w-full h-[500px] bg-cover bg-center rounded-b-3xl"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 py-4 text-4xl ">
          <button
            className="p-2 hover:scale-[1.2] transition-all duration-500"
            onClick={() => handleScroll(-410)}
          >
            <FaChevronCircleLeft />
          </button>
          <button
            className="p-2 hover:scale-[1.2] transition-all duration-500"
            onClick={() => handleScroll(410)}
          >
            <FaChevronCircleRight />
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
