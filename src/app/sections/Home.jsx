"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
const SocialMedia = dynamic(() =>
  import("../../components/socialMedia/SocialMedia")
);
const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        profileRef.current.classList.add("pop-up-2");
        introRef.current.classList.add("pop-up-1");
      } else {
        profileRef.current.classList.remove("pop-up-2");
        introRef.current.classList.remove("pop-up-1");
      }
    }
  }, [homeRef, isHome]);

  return (
    <Fragment>
      <Head>
        <title>Joshua&apos;s Portfolio</title>
      </Head>
      <section id="home">
        <div
          className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm"
          ref={homeRef}
        >
          <div
            className="pop-down-1 translate-x-[-500px] transition-all duration-700 opacity-0"
            ref={introRef}
          >
            <p className="py-2 text-2xl md:text-4xl font-semibold font-sans">
              Hi There,
            </p>
            <p className="py-2 text-2xl md:text-4xl font-semibold font-sans">
              I&apos;m Steven Chiang
            </p>
            {/* Profile Name */}
            <p className="text-2xl md:text-4xl py-2 font-semibold font-sans">
              I am a
              <span className="text-[#c72c6c] dark:text-[#07d0e5]">
                {" "}
                Software Engineer
              </span>
            </p>
            <div className="mt-5 md:mt-10 flex gap-3">
              {/* Hire Me Button */}
              <Link
                className="text-white text-xl font-semibold rounded bg-red-400 hover:bg-red-500 px-2 py-1"
                href={"#about"}
              >
                About Me
              </Link>
              {/* Download CV Button */}
              <Link
                className="text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1"
                href="https://drive.google.com/file/d/1a8vYze6RnRNcPEncEU5ZZ3DfiwthByzb/view?usp=sharing"
                target="_blank"
              >
                Download Resume
              </Link>
            </div>

            {/* Social Media */}
            
            <SocialMedia />

          </div>

          {/* Image */}
          <div
            className={
              "pop-down-2 translate-x-[500px] transition-all opacity-0 duration-700 w-[300px] h-[300px] md:w-[500px] md:h-[500px]  bg-cover m-auto md:m-0 mt-[40px] md:mt-0 bg-no-repeat rounded-full shadow-black dark:shadow-[#d6d6d6] shadow-lg"
            }
            ref={profileRef}
            style={{ backgroundImage: "url(/images/profile-pic.jpg)" }}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
