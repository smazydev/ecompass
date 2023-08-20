import React from "react";
import Image from "next/image";
import Erald from "../assets/erald.png";

const imagesSrc = [Erald];

const ClientsLogoTicker = () => {
  return (
    <div className="bg-custom-black flex justify-start w-5/6 overflow-hidden h-80 border-t-2 border-b-2 border-custom-grey items-center relative ticker text-center mb-20">
      <div className="flex space-x-20 animate-ticker items-center w-5/6">
        {imagesSrc.map((service, index) => (
          <>
            <Image src={service} alt={"sike"} />
            <div className="h-5 w-5 bg-custom-grey"></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ClientsLogoTicker;
