import React from "react";
import glassmorphism from "../assets/Asset 5.png";
import Image from "next/image";

const services = [
  {
    title: "SEO",
    description:
      "Drive organic traffic to your website, ensuring visibility and ranking on search engines, crucial for online success.",
  },
  {
    title: "Brand Development",
    description:
      "Establish a memorable identity, creating a lasting impression among consumers and fostering customer loyalty.",
  },
  {
    title: "Software Development",
    description:
      "Customize solutions for your business needs, increasing efficiency and achieving specific goals.",
  },
  {
    title: "App Development",
    description:
      "Engage users with intuitive mobile applications, catering to a vast audience in today's mobile-first world.",
  },
  {
    title: "Web Development",
    description:
      "Showcase your online presence with functional and aesthetic websites, the digital face of your business.",
  },
  {
    title: "Content Writing",
    description:
      "Deliver valuable information, establishing trust and authority among your audience, while driving engagement.",
  },
  {
    title: "Digital Marketing",
    description:
      "Promote your brand online, targeting specific audiences and ensuring a wider reach, optimizing ROI.",
  },
];

const Services = () => {
  return (
    <div className="bg-white p-10 pt-20 flex flex-col text-black items-center justify-center">
      <div className="flex items-center justify-center h-full mb-20">
        <h3 className="text-black text-xl font-bold uppercase">What We Offer</h3>
      </div>

      <div className="flex justify-center">
        <div className="flex w-5/6 items-center justify-evenly flex-wrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 w-72 h-auto border border-gray-200 bg-white rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2.5 m-2 hover:shadow-xl"
            >
              <h2 className="text-black uppercase text-sm font-bold mb-2">{service.title}</h2>
              <p className="text-black break-words text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Services;
