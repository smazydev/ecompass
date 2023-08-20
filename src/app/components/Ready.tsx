import Image from 'next/image'
import React from 'react';
import ReadyImage from "../assets/Banner New1-01.png";

const Ready = () => {
  return (
    <div className="relative flex items-center justify-center">
        <Image src={ReadyImage} height={800} alt={'ready to start a project'} />
        <div className="absolute inset-0 flex flex-col font-bold justify-center p-5">
            <h2 className="ml-20 text-white text-7xl z-10 uppercase mb-8">ready to start a project?</h2>
            <button className="ml-20 text-custom-blue p-3 w-96 rounded-lg z-10 uppercase bg-white">start now</button>
        </div>
    </div>
  )
}

export default Ready;
