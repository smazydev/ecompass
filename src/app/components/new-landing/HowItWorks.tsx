import React from "react";
import stepOne from "../../assets/step1.svg";
import stepTwo from "../../assets/step2.svg";
import stepThree from "../../assets/step3.svg";
import stepFour from "../../assets/step4.svg";
import Image from "next/image";

const steps = [
  {
    title: "Tell us what problem you're trying to solve",
    description:
      "Want to use your data to learn more about your customers? Trying to uncover business efficiencies to save money? Looking for a custom-built app for your community? We can help.",
    step: "step 1.",
    image: stepOne,
  },
  {
    title: "We'll match you with the right engineers or team",
    description:
      "We’ll pair you with a vetted, professional engineer or a team with the resources and industry expertise to take the reins and move your project forward.",
    step: "step 2.",
    image: stepTwo,
  },
  {
    title: "Let's collaborate, test, iterate, and repeat",
    description:
      "Our approach is collaborative – so much that our clients view us as an extension of their own team.",
    step: "step 3.",
    image: stepThree,
  },
  {
    title: "Bring your ideas to life.",
    description:
      "We believe in creating exceptional products – so much that our clients view us as an extension of their own team.",
    step: "step 4.",
    image: stepFour,
  },
];
const HowItWorks = () => {
    return (
      <div className="text-center lg:bg-[#f1f1f1] pt-10">
        <h1 className="text-xl capitalize font-bold lg:text-5xl">how it works</h1>
        <div className="mt-10 flex flex-wrap justify-center ">
          {steps.map((item, index) => {
            return (
              <div key={index} className={`flex flex-col items-center p-5 w-full md:w-1/2 lg:w-full lg:flex-row ${index % 2 !== 1 ? 'lg:flex-row-reverse' : ''} lg:justify-center`}>
                <div className="flex flex-col items-center justify-center lg:text-left">
                  <h3 className="font-bold capitalize mb-2 mt-2">{item.step}</h3>
                  <h1 className="font-bold capitalize text-2xl mb-2 mt-2 lg:text-4xl lg:w-1/2">
                    {item.title}
                  </h1>
                  <p className="font-light mb-2 mt-2 text-sm lg:w-1/2">
                    {item.description}
                  </p>
                </div>
                
                {item.image && (
                  <Image
                    src={item.image}
                    alt={"step"}
                    className="w-1/2"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default HowItWorks;