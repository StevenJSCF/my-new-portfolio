"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { NavbarMenuItems } from "./NavbarItems";


// import MobileNavbar from "./SidebarMobile";

// import NavbarMobile from "./NavbarMobile";

import {ThemeContext} from "./ThemeContext";

const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0"); // Show the navbar
      } else {
        setTop("-80px"); // Hide the navbar
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className='z-10 px-8 h-[70px] w-full fixed hidden md:flex justify-between items-center gap-4 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] shadow-sm shadow-gray-300 dark:shadow-gray-800 transition-all duration-500 backdrop-filter backdrop-blur-lg'
        style={{ top: top }}
      >
        {/* Name Logo */}
        <p className='text-gray-400 flex'>
          <span className='font-bold text-lg'>Steven</span> <DiTechcrunch />
        </p>
        <div className='h-full flex gap-4'>
          {/* All Links */}
          {NavbarMenuItems.map((navbar) => (
            <Link
              className={
                "font-semibold text-[#159e6e] dark:text-[#17c1ff] hover:border-b-4  border-[#159e6e] dark:border-[#17c1ff] hover:scale-110"
              }
              href={navbar.link}
              key={navbar.name}
            >
              <div className='px-2 h-full flex items-center'>{navbar.name}</div>
            </Link>
          ))}
        </div>
        {/* Theme button */}
        <button
          className='text-xl text-[#159e6e] dark:text-[#17c1ff] hover:scale-110'
          onClick={() => setTheme(theme === "dark" ? null : "dark")}
        >
          {theme === "dark" ? <TbBulbFilled /> : <BsFillLightningChargeFill />}
        </button>
      </div>
    </Fragment>
  );
};

export default Navbar;

    //   {/* Mobile Header */}
    //   <NavbarMobile
    //     setShowMenu={setShowMenu}
    //     setThemeFun={setThemeFun}
    //     showMenu={showMenu}
    //     theme={theme}
    //     top={top}
    //   />

    //   {/* SideMenu For Mobile Screen */}
    //   <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />


