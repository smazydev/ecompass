import React, { ReactNode } from "react";
import Link from "next/dist/client/link";

type NavLinksProps = {
  invert: boolean;
};

const Navlinks: React.FC<NavLinksProps> = ({ invert }) => {
  const links = ["Home","About Us", "Blogs",];
  const terms = [
    "terms and services",
    "frequently asked questions",
    "our philosophy",
  ];

  const renderLinks = (): ReactNode => {
    return links.map((item, index) => {
      const url = item.toLowerCase();
      return (
        <Link
          href={`${
            (url === "home" && "/") ||
            (url === "about us" && "/about") ||
            (url === "blogs" && "/blogs") ||
            (url === "portfolio" && "/portfolio")
          }`}
          passHref
          key={index}
        >
          <li className="mb-10 flex items-center">
            <span
              className={`mr-2 ${
                invert ? "bg-white text-black" : "bg-black text-white"
              } rounded-full w-8 h-8 flex items-center justify-center`}
            >
              {index + 1}.
            </span>
            {item}
          </li>
        </Link>
      );
    });
  };

  const renderTerms = (): ReactNode => {
    return terms.map((item, index) => {
      const url = item.toLowerCase();
      return (
        <Link
          href={`${
            (url === "terms and services" && "/tos") ||
            (url === "frequently asked questions" && "/faq") ||
            (url === "our philosophy" && "/philosophy")
          }`}
          passHref
          key={index}
        >
          <p className="mb-5 capitalize">
            {item}
          </p>
        </Link>
      );
    });
  };

  return (
    <div>
      <ul className="p-5">{renderLinks()}</ul>
      <div className="p-5">{renderTerms()}</div>
    </div>
  );
};

export default Navlinks;
