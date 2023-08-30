import React from "react";
import Image from "next/image";
import ExpectationsBanner from "../assets/expectations-img-1.png";
import Icon2 from "../assets/Icon2.png";

const Expectations = () => {
  return (
    <div className="bg-custom-black p-10 pt-20 flex flex-col">
      <div className="flex items-center justify-center mb-10">
        <h3 className="text-white text-7xl uppercase mr-48">
          how it<br /> works?
        </h3>
        <Image
          src={ExpectationsBanner}
          alt="expectations image"
          className="inline-block"
        />
        <Image
          src={Icon2}
          alt="expectations image 2"
          className="inline-block"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex w-5/6 items-center justify-evenly">
          <div className="w-1/4 mr-2">
            <h2 className="text-custom-grey uppercase text-sm">step 1.</h2>
            <h1 className="text-white text-3xl font-bold mb-2">Tell us what problem you're trying to solve</h1>
          <p className="text-custom-grey break-words ">
          Want to use your data to learn more about your customers? Trying to uncover business efficiencies to save money? 
          Looking for a custom-built app for your community? We can help.
          </p>
          </div>
         
          <div className="w-1/4 mr-2">
          <h2 className="text-custom-grey uppercase text-sm">step 2.</h2>
            <h1 className="text-white text-3xl font-bold mb-2">We'll match you with the right engineers or team</h1>
          <p className="text-custom-grey break-words">
          We’ll pair you with a vetted, professional engineer or a team with the resources and industry expertise to take the reins and move your project forward.
          </p>
          </div>
          <div className="w-1/4 mr-2">
          <h2 className="text-custom-grey uppercase text-sm">step 3.</h2>
            <h1 className="text-white text-3xl font-bold mb-2">Let’s collaborate, test, iterate, and repeat</h1>
          <p className="text-custom-grey break-words mb-2">
          Our approach is collaborative – so much that our clients view us as an extension of their own team.
          </p>
          </div>
          <div className="w-1/4 mr-2">
          <h2 className="text-custom-grey uppercase text-sm">step 4.</h2>
            <h1 className="text-white text-3xl font-bold mb-2">Bring your ideas to life.</h1>
            <p className="text-custom-grey break-words">
          We believe in creating exceptional products – so much that our clients view us as an extension of their own team.
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Expectations;
