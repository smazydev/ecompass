import Image from 'next/image'
import React from 'react'
import illustration from "../../assets/Illustration.svg";

const Hero = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center mt-10 lg:flex-row '>
        <div className='flex flex-col items-center justify-center lg:items-center lg:w-1/2'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left'>Designed and built to help you out-perform your competitors</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-center lg:text-left mt-5 '>focus on the things that matter and let us handle the rest.</p>
            <div className='mt-5 mb-5 lg:mt-8'>
                <button className='bg-black text-white w-60 h-14 md:w-64 md:h-16 rounded-lg'>schedule a call</button>
            </div>
        </div>
        <div className='lg:'>
            <Image src={illustration} alt={'hero image'} width={500} height={400} 
                   className='md:w-auto md:h-auto lg:w-[600px] lg:h-[480px]' />
        </div>
    </div>
  )
}

export default Hero;
