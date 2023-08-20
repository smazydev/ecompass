import React from 'react'
import Banner from '../assets/banner.png'
import Image from "next/image";

const JumbotronImg = () => {
  return (
    <div className='bg-custom-black p-20 w-screen h-max'>
           <Image src={Banner} className='absolute top-0 left-40 mt-[250px]' width={1600}  alt={'Sample image'}/>
    </div>
     
  )
}

export default JumbotronImg