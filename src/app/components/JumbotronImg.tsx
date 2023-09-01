import React from 'react'
import Banner from '../assets/banner.png'
import Image from "next/image";

const JumbotronImg = () => {
  return (
    <div className='bg-white p-4 md:p-20 w-screen relative md:mt-[30rem]'>
   <Image 
    src={Banner} 
    className='absolute bottom-20 left-1 md:bottom-0 mx-auto'
    width={1900} 
    height={900}
    alt={'Sample image'}
/>
    </div>
  )
}

export default JumbotronImg;
