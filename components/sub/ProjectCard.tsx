import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  gitRepoLink: string;
  liveLink: string;
}

const ProjectCard = ({ src, title, description, gitRepoLink, liveLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        <div className="mt-4 flex space-x-2">
          <a href={gitRepoLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              GitHub
            </button>
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300">
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
