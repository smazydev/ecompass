'use client'
import React, { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Main Header */}
      <header className="flex items-center justify-between p-5 border bg-custom-grey w-screen">
        <ul className="hidden md:flex space-x-10">
          <li className="capitalize">about us</li>
          <li className="capitalize">team</li>
        </ul>
        <div>
          <h1>Ecompasse</h1>
        </div>
        <ul className="hidden md:flex space-x-10">
          <li className="capitalize">services</li>
          <li className="capitalize">project</li>
        </ul>
        {/* Hamburger Menu for Mobile */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>
      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="absolute top-0 right-0 h-screen w-1/2 bg-white shadow-xl p-5 z-10">
          <button 
            className="mb-5 focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            Close
          </button>
          <ul className="flex flex-col space-y-4">
            <li className="capitalize">about us</li>
            <li className="capitalize">team</li>
            <li className="capitalize">services</li>
            <li className="capitalize">project</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
