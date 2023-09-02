import Image from "next/image";
import React from "react";
import ReadyImage from "../assets/Banner New1-01.png";
import ready from "../assets/ready.svg";

const Ready = () => {
  return (
    
      <div className="flex flex-col items-center justify-center h-full w-full bg-white md:flex-row md:w-screen md:items-center md:justify-between md:pl">
      <div className="mt-20 mb-20  md:pl-20 md:ml-40">
        <h2 className="text-3xl font-bold text-black capitalize mb-10 md:text-4xl lg:text-5xl">
          ready to start a project?
        </h2>
        <button className="bg-black align-center text-white w-60 h-14 rounded-lg uppercase md:w-64 lg:w-72">start now</button>
      </div>
      <div className="md:w-1/2">
        <Image src={ready} alt={"ready"} className="md:w-auto md:h-auto lg:w-auto h-auto" />
      </div>
    </div>

    
  );
};

export default Ready;
