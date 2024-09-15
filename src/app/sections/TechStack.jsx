"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "../portfolio-data/TechStackItems";
// import Loader from "../../components/layout/loader/Loader";

const TechStack = () => {
  const [section, setSection] = useState("Languages");
  const [sectionData, setSectionData] = useState([]);
  const [istechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();
  const teckStackTittleRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    techStackObserver.observe(techStackRef.current);

    if (istechStack) {
      techBoxesRef.current.classList.add("pop-up-tech-box");
      buttonsRef.current.classList.add("pop-up-tech-button");
      teckStackTittleRef.current.classList.add("pop-up-tittle");
    } else {
      techBoxesRef.current.classList.remove("pop-up-tech-box");
      buttonsRef.current.classList.remove("pop-up-tech-button");
      teckStackTittleRef.current.classList.remove("pop-up-tittle");
    }
  }, [istechStack]);

  useEffect(() => {
    const selectedSection = TechStackData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current.classList.add("pop-up-tech-box");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden"
        id="techStack"
        ref={techStackRef}
      >
        <div className="pop-down-title" ref={teckStackTittleRef}>
          <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
            <FaLaptopCode /> Tech Stack
          </h2>
        </div>

        <div
          className="pop-down-tech-button w-fit m-auto rounded-lg border border-black dark:border-white border-solid overflow-hidden"
          ref={buttonsRef}
        >
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Languages" ? "bg-red-600" : null
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-tech-box");
            }}
          >
            Languages
          </button>
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Tech" ? "bg-red-600" : null
            } transition-all border-l border-r border-black dark:border-white border-solid`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-tech-box");
            }}
          >
            Tech
          </button>
          <button
            className={`w-[100px] md:w-[150px] p-2 font-bold ${
              section === "Cloud/Tools" ? "bg-red-600" : null
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-tech-box");
            }}
          >
            Cloud/Tools
          </button>
        </div>

        <div
          className="pop-down-tech-box flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5"
          ref={techBoxesRef}
        >
          {sectionData.length !== 0
            ? sectionData.map((skill, index) => (
                <div
                  className="skill-icon px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center"
                  key={skill.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p>{skill.icon}</p>
                  <p>{skill.name}</p>
                </div>
              ))
            : null}
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;
