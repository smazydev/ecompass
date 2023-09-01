import React from "react";
import Image from "next/image";
import Icon from "../assets/Icon1.png";

const Jumbotron = () => {
  return (
    <div className="bg-white  w-full h-screen mb-[2rem]">
      <div className="h-screen flex flex-col lg:flex-row justify-center items-center  bg-white ">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-8xl lg:text-8xl xl:text-8xl uppercase font-bold">
            sharing
            <span className="hidden md:inline-block">
              <Image width={100} height={30} src={Icon} alt={"loudspeaker"} />
            </span>
            <br />
            your vision
            <span className="md:hidden">
              <Image
                className="mx-auto mt-2"
                width={100}
                height={30}
                src={Icon}
                alt={"loudspeaker"}
              />
            </span>
          </h1>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left px-6 lg:px-0">
          <p className="hidden lg:block text-lg lg:text-xl">
            We love to create experiences <br /> that enable people to connect,{" "}
            <br /> express themselves, and <br /> establish meaningful
            relationships
          </p>
          <p className="lg:hidden text-lg lg:text-xl">
            We love to create experiences that enable people to connect, express
            themselves, and establish meaningful relationships
          </p>
          <div className="mt-10">
            <button className="bg-black text-white p-3 w-40 rounded-lg capitalize">
              schedule a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
