"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();
  const aboutTitleRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const aboutObserver = new IntersectionObserver(
      ([aboutEntry]) => {
        setIsAbout(aboutEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    aboutObserver.observe(aboutRef.current);

    if (isAbout) {
      profile2Ref.current.classList.add("pop-up-1");
      aboutInfoRef.current.classList.add("pop-up-2");
      aboutTitleRef.current.classList.add("pop-up-tittle");
    } else {
      profile2Ref.current.classList.remove("pop-up-1");
      aboutInfoRef.current.classList.remove("pop-up-2");
      aboutTitleRef.current.classList.remove("pop-up-tittle");
    }
  }, [isAbout]);

  return (
    <Fragment>
      <section
        className="border-none shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
        id="about"
        ref={aboutRef}
      >
        <div className="pop-down-tittle" ref={aboutTitleRef}>
          <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
            <FaUser />
            About Me
          </h2>
        </div>
        <div className="pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]">
          <div
            className="bg-[url(/images/about-pic.jpg)] pop-down-1 shadow-black dark:shadow-[#d6d6d6] shadow-lg w-[300px] h-[350px] m-auto bg-cover bg-no-repeat"
            ref={profile2Ref}
          />
          <div
            className="text-lg p-2 opacity-0 pop-down-2 transition-all mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded"
            ref={aboutInfoRef}
          >
            <p className="text-3xl text-center md:text-left font-semibold text-[#159e6e] dark:text-[#17c1ff]">
              I&apos;m Joshua Chiang
            </p>
            <p className="text-center md:text-left text-red-600 mt-1">
              Software Engineer | Iowa State University Graduate
            </p>

            <div className="mt-5 justify-evenly text-justify">
              <p className="text-gray-600 dark:text-gray-300">
                Hello, my name is Joshua, I go by my middle name Steven. I am
                a Software Engineer and Iowa State University graduate, based in the United States.
                I am deeply passionate about technology and software development, with a particular
                love for building full stack websites and applications with React. While I have an inclination 
                towards backend development based on my experience, I've been focusing 
                more on web and app development recently. I love learning new technologies 
                and am always eager to take on new challenges that push my boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
