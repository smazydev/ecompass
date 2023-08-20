import React from 'react'
import Image from "next/image"
import jumbotronImg2 from "../assets/jumbotron-img-2.jpg";

const Portfolio = () => {
  return (
    <div className='flex justify-center bg-custom-black min-h-screen items-center py-20'>
      <section className='flex w-4/5 space-x-4'>
        {/* Large Image on the Left */}
        <div className='relative flex-grow'>
          <div className='bg-custom-blue w-full h-[400px]'><Image src={jumbotronImg2} alt={"sike"} /></div> {/* Placeholder for the image */}
          {/* <div className='absolute bottom-4 left-4 text-white'>Image Title</div> Caption */}
        </div>
        
        {/* Two Smaller Images on the Right */}
        <div className='flex flex-col space-y-4 w-1/3'>
          <div className='relative h-[190px]'>
            <div className='bg-custom-orange w-full h-full'></div> {/* Placeholder for the image */}
            {/* <div className='absolute bottom-4 left-4 text-white'>Image Title</div> Caption */}
          </div>
          <div className='relative h-[190px]'>
            <div className='bg-custom-red w-full h-full'></div> {/* Placeholder for the image */}
            {/* <div className='absolute bottom-4 left-4 text-white'>Image Title</div> Caption */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;
