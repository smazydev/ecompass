import React from "react";
import Image from "next/image";
import Icon from "../assets/Icon1.png";

const Jumbotron = () => {
  return (
    <div className='bg-custom-black pb-[150px] w-screen'>
    <div className="h-screen flex justify-center pt-[50px] bg-custom-grey rounded-br-[100px] rounded-bl-[100px]">
      <div className='w-1/2'>
        <h1 className="text-8xl uppercase font-bold ">sharing <span className="hidden md:inline-block"><Image width={100} height={30}src={Icon} alt={'loudspeaker'}/></span> <br />your vision</h1>
      </div>
      <div className="">
        <p>We love create experiences <br /> that enable people to connect, <br /> express themselves  and  <br /> establish meaningful relationships</p>
        <div className="mt-10">
          <button className="bg-black text-white p-3 w-40 rounded-lg capitalize">schedule a call</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Jumbotron;
