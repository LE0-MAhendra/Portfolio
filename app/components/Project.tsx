"use client";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectsData } from "../utils/projectsData";

const Projects = () => {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const horizontalSectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", () => {});
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    if (cardContainerRef.current && cardRefs.current.length > 0) {
      const cards = cardRefs.current;
      const containerScrollWidth = cardContainerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = Math.max(containerScrollWidth - viewportWidth, 0);

      gsap.to(cardContainerRef.current, {
        x: () => -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (cards.length - 1 || 1), // Avoid division by zero if only one card
            duration: { min: 0.2, max: 0.6 },
            ease: "power2.inOut",
            inertia: false,
          },
        },
      });
    }
  }, [ProjectsData]); // Depend on ProjectsData
  console.log("Projects as");

  return (
    <div className="lg:w-[90%] w-full mx-auto" id="Projects">
      <div
        ref={horizontalSectionRef}
        className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <h1 className="text-8xl text-white text-center mb-10">Projects</h1>
        <div
          ref={cardContainerRef}
          className="flex flex-row items-center justify-start space-x-8 p-4 h-full"
        >
          <div className="flex-none max-sm:w-[600px] w-[1000px]" />
          {ProjectsData.map((project, index) => (
            <section
              key={project.name || index}
              className="flex-none w-[400px] h-[500px] rounded-xl bg-[#1e293b] shadow-2xl p-5"
              style={{ zIndex: 100 - index }}
              ref={(el) => {
                cardRefs.current[index] = el;
                return; // explicitly return nothing (void)
              }}
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
              <h2 className="text-2xl text-white mt-4 font-bold">
                {project.name}
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                {project.description}
              </p>
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
                  <Link href={project.youtubeLink} target="_blank">
                    <button className="bg-blue-300 px-4 py-1 rounded-lg text-white">
                      Youtube
                    </button>
                  </Link>
                )}
                {project.githubLink && (
                  <Link href={project.githubLink} target="_blank">
                    <button className="bg-blue-300 px-4 py-1 rounded-lg text-white">
                      Github
                    </button>
                  </Link>
                )}
                {project.previewLink && (
                  <Link href={project.previewLink} target="_blank">
                    <button className="bg-blue-300 px-4 py-1 rounded-lg text-white">
                      Preview
                    </button>
                  </Link>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
