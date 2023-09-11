import Image from "next/image";
import React from "react";
import ecompasseWhite from "../assets/footer-logo.png";
import facebookicon from "../assets/facebook.png";
import linkedinicon from "../assets/linkedin.png";
import instagramicon from "../assets/instagram.png";
import mediumicon from "../assets/medium.png";
import whatsappicon from "../assets/whatsapp.png";
import dribbleicon from "../assets/dribble.png";
import x from "../assets/x.png";
import Navlinks from "./new-landing/Navlinks";

const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="bg-black text-white p-4 md:p-10 flex flex-col md:flex-row items-center w-full justify-evenly">
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
          <div
            className="flex items-center justify-center mt-10 flex-col "
            style={{ height: "fit-content" }}
          >
            <h1 className="uppercase mr-5">follow us on</h1>
            <div className="flex mt-5">
              <Image src={facebookicon} alt={"sike"} className="h-4 w-4 mr-4" />
              <Image src={linkedinicon} alt={"sike"} className="h-4 w-4 mr-4" />
              <Image
                src={instagramicon}
                alt={"sike"}
                className="h-4 w-4 mr-4"
              />
              <Image src={mediumicon} alt={"sike"} className="h-4 w-4 mr-4" />
              <Image src={x} alt={"sike"} className="h-4 w-4 mr-4" />
              <Image src={whatsappicon} alt={"sike"} className="h-4 w-4 mr-4" />
              <Image src={dribbleicon} alt={"sike"} className="h-4 w-4 mr-4" />
            </div>
          </div>
        </div>
        <Navlinks invert />
      </div>
    </footer>
  );
};

export default Footer;
