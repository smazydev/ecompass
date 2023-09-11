"use client";

import React, { useState } from "react";
import Image from "next/image";
import hamburgerIcon from "../../assets/hamburger-icon.png";
import ecompasseLogo from "../../assets/ecompasse-black.png";
import closeIcon from "../../assets/closeicon.png";
import Navlinks from "./Navlinks";
import linkedinIcon from "../../assets/linkedin.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import mediumIcon from "../../assets/medium.png";
import Link from "next/link";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <nav className="border-b flex items-center justify-between p-5 lg:pl-28 lg:pr-28">
        <Link href={"/"} passHref>
          <Image src={ecompasseLogo} alt={"logo"} width={100} height={50} />
        </Link>

        {!isDrawerOpen && (
          <Image
            src={hamburgerIcon}
            alt={"hamburger icon"}
            onClick={toggleDrawer}
            className="cursor-pointer"
          />
        )}
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full  flex justify-end transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "opacity-100" : "opacity-0"
        } ${isDrawerOpen ? "translate-x-0" : "translate-x-full"} z-10`}
      >
        <div className="h-full bg-black text-white flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <Image
              src={instagramIcon}
              alt={"facebook icon"}
              className="h-4 w-4 mb-4"
            />
            <Image
              src={mediumIcon}
              alt={"facebook icon"}
              className="h-4 w-4 mb-4"
            />
            <Image
              src={linkedinIcon}
              alt={"linkedin icon"}
              className="h-4 w-4 mb-4"
            />
            <Image
              src={facebookIcon}
              alt={"facebook icon"}
              className="h-4 w-4 mb-4"
            />
          </div>
          <div className="bg-white h-1 w-4 transform -rotate-90 mb-12"></div>
          <h1 className="transform -rotate-90">follow us on</h1>
        </div>
        <div
          className="bg-white w-64 h-full relative pt-20 md:w-1/2 "
          onClick={toggleDrawer}
        >
          <Image
            src={closeIcon}
            alt={"close icon"}
            onClick={toggleDrawer}
            className="cursor-pointer absolute top-2 right-2"
          />
          <Navlinks invert={false} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
