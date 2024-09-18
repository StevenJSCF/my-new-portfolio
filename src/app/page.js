import Image from "next/image";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import Theme from "../components/navbar/Theme";

const Navbar = dynamic(() => import("../components/navbar/Navbar"));
const HomePage = dynamic(() => import("./sections/Home"));
// const SocialMedia = dynamic(() =>
//   import("../components/socialMedia/SocialMedia")
// );
const About = dynamic(() => import("./sections/About"));
const TeckStack = dynamic(() => import("./sections/TechStack"));
const Education = dynamic(() => import("./sections/Education"));
const Projects = dynamic(() => import("./sections/Projects"));

export default function Home() {
  return (
    <Fragment>
      <Theme>
        <div className="dark:bg-black dark:text-white">
          {/*Desktop Navbar*/}
          <Navbar />
          {/*Home page*/}
          <HomePage />
          {/* SocialMedia */}
          {/* <SocialMedia /> */}
          {/* About me */}
          <About />
          {/* Tech Stacks */}
          <TeckStack />
          {/* Education */}
          <Education />
          {/* Education */}
          <Projects />
        </div>
      </Theme>
    </Fragment>
  );
}
