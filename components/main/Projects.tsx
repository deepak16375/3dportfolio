import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-40"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/right-pathways.png"
          title="Bright Pathways (Website on Social Impact)"
          description=" Developed and managed Bright Pathways, a web platform connecting users with essential services like old age homes, special schools, and adoption centers."
          gitRepoLink="https://github.com/sajalbatra/BrightPathways"
          liveLink="https://bright-pathways-demo.com"
        />
        <ProjectCard
          src="/asl.png"
          title="ASLYF (Multimodal ASL Translator)"
          description="
          Created ASLYF, a revolutionary ASL translator aiding non-verbal individuals. Translates text to ASL, converts text to audio, and transcribes YouTube videos for accessibility."
          gitRepoLink="https://github.com/your-username/bright-pathways"
          liveLink="https://aslyf.vercel.app/"
        />
        <ProjectCard
          src="/ecommerce.png"
          title="Ecommerce Website Frontend"
          description="Meet RedTape E-commerce: a sleek, ReactJS-powered site for seamless, lightning-fast shopping, styled with the modern flair of Tailwind CSS."
          gitRepoLink="https://github.com/deepak16375/RedTape-Ecommerce-Frontend"
          liveLink="https://red-tape-ecommerce-frontend.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;