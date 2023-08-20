import React from "react";
import IconBlue from "../assets/Icon Plus Blue.png"
import IconRed from "../assets/Icon Plus Red.png"
import IconYellow from "../assets/Icon Plus Yellow.png"
import Image from "next/image";


const Client = () => {
  return (
    <div className="bg-custom-black h-80 w-screen pt-20">
      <div className="flex justify-evenly">
        <div>
        <h2 className="text-white text-8xl relative">
            600 <span className="inline-block absolute top-[-20]"><Image src={IconBlue}  alt={'plus icon'}/></span> <br />
            <span className="text-2xl capitalize text-custom-grey">super happy clients</span>
          </h2>
        </div>
        <div>
        <h2 className="text-white text-8xl relative">
            600 <span className="inline-block absolute top-[-20]"><Image src={IconRed}  alt={'plus icon'}/></span> <br />
            <span className="text-2xl capitalize text-custom-grey">super happy clients</span>
          </h2>
        </div>
        <div>
        <h2 className="text-white text-8xl relative">
            900 <span className="inline-block absolute top-[-20]"><Image src={IconYellow}  alt={'plus icon'}/></span> <br />
            <span className="text-2xl capitalize text-custom-grey">adv awards winners</span>
          </h2>
        </div>
        <div>
        <h2 className="text-white text-3xl bold relative w-96">
           <p>Stay connceted with us & <br/> get your digital marketing <br /> strategy in place. We make digital marketing simple.</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Client;
