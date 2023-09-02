import React from 'react';
import bnkLogo from "../../assets/bananaandkale.jpg";
import workwlogo from "../../assets/workwise.png";
import dtfactorylogo from "../../assets/dtf.jpg";
import eraldlogo from "../../assets/erald.png";
import Image from 'next/image';

const clients = [
    bnkLogo,
    workwlogo,
    dtfactorylogo,
    eraldlogo,
]

const Partners = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl mb-4 font-bold text-center lg:text-5xl lg:font-bold'>Partners we&apos;ve worked with</h1>
        <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
            {
                clients.map((item, index) => {
                    return (
                      <Image 
                          src={item} 
                          alt={'item'} 
                          className='grayscale ml-4' 
                          width={120 * (index < 2 ? 1 : (index < 3 ? 1.5 : 2))} 
                          height={60 * (index < 2 ? 1 : (index < 3 ? 1.5 : 2))} 
                          key={index}
                      />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Partners;
