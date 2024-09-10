import Image from "next/image";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const Navbar = dynamic(() => import("../components/navbar/Navbar"));
const HomePage = dynamic(() => import("./sections/Home") )

export default function Home() {
  return (
    <>
    {/*Desktop Navbar*/}
      <Navbar />
    {/*Home page*/}v
      <HomePage />

    </>
  );
}
