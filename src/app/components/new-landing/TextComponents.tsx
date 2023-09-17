import React from "react";
import { PortableTextComponents } from "@portabletext/react";

const TextComponents: PortableTextComponents = {
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a className='text-custom-black italic cursor-pointer 'href={value?.href} target={target} rel={"_blank noindex nofollow"}>
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className={"text-2xl font-bold my-2"}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={"text-xl font-bold my-2"}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={"text-lg font-bold  my-2"}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className={"text-md font-bold  my-2"}>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className={"text-sm font-bold  my-2"}>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className={"text-xs font-bold  my-2"}>{children}</h6>
    ),
    p: ({ children }) => <p className="text-md">{children}</p>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <ul className="mt-xl" style={{ listStyleType: "disc" }}>{children}</ul>,
    number: ({children}) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },
};

export default TextComponents;
