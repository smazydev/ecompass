import Image from "next/image";
import React from "react";
import ecompasseWhite from "../assets/ecompasse-white.png";
import facebookicon from "../assets/facebook.png";
import linkedinicon from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 md:p-10 flex flex-col md:flex-row items-center w-full justify-evenly">
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <h1 className="uppercase text-3xl md:text-5xl font-bold mb-6 md:mb-10">
          keep in touch
        </h1>
        <Image
          src={ecompasseWhite}
          alt={"ecompasse white logo"}
          width={150}
          height={50}
        />
      </div>

      <div
        className="flex items-center justify-center"
        style={{ height: "fit-content" }}
      >
        <Image src={facebookicon} alt={"sike"} className="h-4 w-4 mr-4"/>
        <Image src={linkedinicon} alt={"sike"} className="h-4 w-4 mr-4"/>
      </div>
      <p className="mt-10 text-sm uppercase">all rights reserved &copy; 2023</p>
    </footer>
  );
};

export default Footer;
