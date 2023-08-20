import React from "react";
import Image from "next/image";
import teamMemers from "../assets/team-members.png";

const teamMembers = [
  {
    id: 1,
    avatar: "https://via.placeholder.com/100",
    name: "John Doe",
    role: "Developer",
  },
  {
    id: 2,
    avatar: "https://via.placeholder.com/100",
    name: "Jane Smith",
    role: "Designer",
  },
  {
    id: 3,
    avatar: "https://via.placeholder.com/100",
    name: "Bob Johnson",
    role: "Manager",
  },
  // ... you can add more team members here
];

const TeamsSection = () => {
  return (
    <div className=" flex items-center justify-center w-2/4">
      <div className="flex items-center justify-center">
        <Image src={teamMemers} alt="team" />
        <div className="flex flex-col ml-8">
          <h2 className="text-white text-5xl uppercase">meet our teams</h2>
          <p className="mt-4 text-gray-600">
            our team consists of more than 80 experienced and very passionate
            people at the cutting edge of all things digital, we always give our
            best for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
