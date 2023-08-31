import Image from "next/image";
import React from "react";
import ecompasseWhite from "../assets/ecompasse-white.png";

const Footer = () => {
  return (
    <footer className="bg-custom-black text-white p-4 md:p-10 flex flex-col md:flex-row items-center w-full justify-evenly">
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
        className="flex flex-col items-start md:items-end space-y-4 md:space-y-0 md:space-x-0 md:pt-20"
        style={{ height: "fit-content" }}
      >
        <div className="border-b-2 p-2 w-64 md:w-96 flex justify-between">
          <h1>email</h1>
          <h2>hello@ecompasse.com</h2>
        </div>
        <div className="border-b-2 p-2 w-64 md:w-96 flex justify-between">
          <h1>Linkedin</h1>
          <h2>hello@ecompasse.com</h2>
        </div>
        <div className="border-b-2 p-2 w-64 md:w-96 flex justify-between">
          <h1>Medium</h1>
          <h2>hello@ecompasse.com</h2>
        </div>
        <div className="border-b-2 p-2 w-64 md:w-96 flex justify-between">
          <h1>Instagram</h1>
          <h2>hello@ecompasse.com</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
