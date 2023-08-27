import Image from 'next/image';
import React from 'react';
import ecompasseWhite from '../assets/ecompasse-white.png';

const Footer = () => {
  return (
    <footer className="bg-custom-black text-white p-10 flex items-center w-screen justify-evenly">
        <div className='flex flex-col'>
            <h1 className="uppercase text-5xl font-bold mb-10">keep in touch</h1>
            <Image src={ecompasseWhite} alt={'ecompasse white logo'} width={200}/>
        </div>
        <div className="pt-20" style={{height:'fit-content'}}>
          <div className="mb-5 border-b-2 p-2 w-96 flex justify-between">
            <h1>email</h1>
            <h2>hello@ecompasse.com</h2>
          </div>
          <div className="mb-10 border-b-2 p-2 w-96">Instagram</div>
          <div className="mb-10 border-b-2 p-2 w-96">Medium</div>
          <div className="mb-10 border-b-2 p-2 w-96">Linkedin</div>
        </div>
    </footer>
  )
}

export default Footer;
