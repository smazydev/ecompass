import React from "react";
import Image from "next/image";
import ExpectationsBanner from "../assets/expectations-img-1.png";
import Icon2 from "../assets/Icon2.png";

const Expectations = () => {
  return (
    <div className="bg-custom-black p-10 flex flex-col">
      <div className="flex items-center justify-center mb-10">
        <h3 className="text-white text-7xl uppercase mr-48">
          what we <br /> deliver
        </h3>
        <Image
          src={ExpectationsBanner}
          alt={"expectations image"}
          className="inline-block"
        />
        <Image
          src={Icon2}
          alt={"expectations image 2"}
          className="inline-block"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/5 ">
          <p className="text-custom-grey mr-20">
            custom digital strategy informed by a powerful appraisal & your
            business deserves better than a pre-packaged strategy.
          </p>
          <p className="text-custom-grey mr-20">
            See the progress we're making and what's driving results, anytime,
            we keep you consistently, transparently informed.
          </p>
          <p className="text-custom-grey">
            services that dovetail together for your greatest ROI, rowing in the
            same direction toward your growth goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expectations;
