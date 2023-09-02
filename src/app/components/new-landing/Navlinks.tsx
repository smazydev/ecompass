import React, { ReactNode } from "react";

const Navlinks = () => {
  const links = ["About Us", "Blogs", "Portfolio"];
  const terms = ["terms and services","frequently asked questions","our philosophy"]

  const renderLinks = (): ReactNode => {
    return links.map((item, index) => (
      <li className="mb-10 flex items-center" key={index}>
        <span className="mr-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">{index+1}.</span>
        {item}
      </li>
    ));
  };

  const renderTerms = ():ReactNode => {
    return terms.map((item,index) => {
       return <p key={index} className="mb-5 capitalize">
            {item}
        </p>
    })
  }

  return <div>
    <ul className="p-5">{renderLinks()}</ul>
    <div className="p-5">{renderTerms()}</div>
    </div>
};

export default Navlinks;
