import React from 'react';

const services = [
  'SEO',
  'Brand Development',
  'Software Development',
  'App Development',
  'Web Development',
  'Content Writing',
  'Digital Marketing'
];

const Services = () => {
  return (
    <div className='bg-custom-black flex justify-start w-5/6 overflow-hidden h-80 border-t-2 border-b-2 border-custom-grey items-center relative ticker text-center'>
      <div className="flex space-x-20 animate-ticker items-center w-5/6">
        {services.map((service, index) => (
          <>
           <h2 key={service} className="text-white text-4xl uppercase">
            {service}
          </h2>
          <div className='h-5 w-5 bg-custom-grey'></div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Services;
