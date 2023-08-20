import React from "react";

const Header = () => {
  return (
    <header className="flex justify-evenly p-5 border bg-custom-grey w-screen">
      <ul className="flex">
        <li className="mr-10 capitalize">about us</li>
        <li className="ml-10 capitalize">project</li>
      </ul>
      <div>
        <h1>Ecompasse</h1>
      </div>
      <ul className="flex justify-center">
        <li className="mr-10 capitalize">services</li>
        <li className="ml-10 capitalize">project</li>
      </ul>
    </header>
  );
};

export default Header;
