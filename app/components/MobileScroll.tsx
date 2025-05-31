import React from "react";
import { ProjectsData } from "../utils/projectsData";
import Image from "next/image";
import Link from "next/link";

function MobileScroll() {
  console.log("Mobile scorll");
  return (
    <div className="flex gap-3 flex-col w-full mx-auto">
      <h1 className="sm:text-8xl w-full lg:w-[40%] text-white text-center text-6xl">
        Projects
      </h1>
      {ProjectsData.map((project) => (
        <section
          key={project.name}
          className="flex flex-col w-[400px] h-[500px] rounded-xl bg-[#1e293b] shadow-2xl p-5"
        >
          {project.imageLink && (
            <Image
              src={project.imageLink}
              alt={project.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
          )}
          <h2 className="text-2xl text-white mt-4 font-bold">{project.name}</h2>
          <p className="text-gray-300 text-sm mt-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologiesUsed.map((tech) => (
              <span
                key={tech}
                className="bg-blue-700 text-xs text-white px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 items-center mt-2">
            {project.youtubeLink && (
              <Link
                href={project.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-300 px-4 py-1 rounded-lg text-white">
                  Youtube
                </button>
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-300 px-4 py-1 rounded-lg text-white">
                  Github
                </button>
              </Link>
            )}
            {project.previewLink && (
              <Link
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-300 px-4 py-1 rounded-lg text-white">
                  Preview
                </button>
              </Link>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MobileScroll;
