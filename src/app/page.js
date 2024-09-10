import Image from "next/image";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import Theme from "../components/navbar/Theme";

const Navbar = dynamic(() => import("../components/navbar/Navbar"));
const HomePage = dynamic(() => import("./sections/Home"));

export default function Home() {
  return (
    <Fragment>
      <Theme>
      <div className='dark:bg-black dark:text-white'>
          {/*Desktop Navbar*/}
          <Navbar />
          {/*Home page*/}v
          <HomePage />
        </div>
      </Theme>
    </Fragment>
  );
}
