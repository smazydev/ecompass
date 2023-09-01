import React from "react";
import Image from "next/image";
import ExpectationsBanner from "../assets/expectations-img-1.png";
import Icon2 from "../assets/Icon2.png";

const steps =  [
  {
    title: "Tell us what problem you're trying to solve",
    description:
      "Want to use your data to learn more about your customers? Trying to uncover business efficiencies to save money? Looking for a custom-built app for your community? We can help.",
    step: "step 1.",
  },
  {
    title: "We'll match you with the right engineers or team",
    description:
      "We’ll pair you with a vetted, professional engineer or a team with the resources and industry expertise to take the reins and move your project forward.",
    step: "step 2.",
  },
  {
    title: "Let's collaborate, test, iterate, and repeat",
    description:
      "Our approach is collaborative – so much that our clients view us as an extension of their own team.",
    step: "step 3.",
  },
  {
    title: "Bring your ideas to life.",
    description:
      "We believe in creating exceptional products – so much that our clients view us as an extension of their own team.",
    step: "step 4.",
  },

]

const Expectations = () => {
  return (
    <div className="bg-white p-4 md:p-10 pt-20 flex flex-col text-black">
      <div className="flex items-center justify-center h-full mb-8 md:mb-20">
        <h3 className="text-4xl md:text-7xl uppercase">how it works?</h3>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 place-items-center">
          {steps.map((item, index) => (
            <div key={index}>
              <div
                className="flex flex-col items-center p-6 w-72 h-72 bg-white border border-gray-200 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2.5 m-2 hover:shadow-xl"
              >
                <h2 className="text-black uppercase text-xs md:text-sm">{item.step}</h2>
                <h1 className="text-black font-bold mb-2 text-xl">
                  {item.title}
                </h1>
                <p className="text-black break-words text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





export default Expectations;
