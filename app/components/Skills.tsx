"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { skills } from "../utils/data";
import gsap from "gsap";

type SkillCategory = keyof typeof skills;
const categories = Object.keys(skills) as SkillCategory[];

const SkillsMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory>("Languages");

  const skillsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skillsGridRef.current) return;

    const skillItems = Array.from(skillsGridRef.current.children);

    // Kill any previous animation on skill items
    gsap.killTweensOf(skillItems);

    // Timeline to handle exit and entry animation
    const tl = gsap.timeline();

    tl.to(skillItems, {
      autoAlpha: 0,
      y: 30,
      stagger: 0.03,
      duration: 0.2,
      ease: "power1.in",
      onComplete: () => {
        gsap.fromTo(
          skillItems,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: "power3.out",
            clearProps: "all",
          }
        );
      },
    });

    return () => {
      tl.kill();
    };
  }, [selectedCategory]);

  return (
    <div className="lg:w-[90%] w-full mx-auto p-4 gap-6 flex flex-col min-h-screen mb-[100px]">
      <h1 className="sm:text-8xl w-full lg:w-[40%]  text-6xl">Skills</h1>
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 justify-around items-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition shadow-sm ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        ref={skillsGridRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 rounded-lg shadow"
      >
        {skills[selectedCategory].map((item, index) => {
          if (typeof item === "string") {
            return (
              <div key={index} className="text-center">
                <div className="text-sm font-medium text-gray-700">{item}</div>
              </div>
            );
          }

          const [name, path] = Object.entries(item)[0];
          return (
            <div key={name} className="flex flex-col items-center gap-2">
              <Image
                src={path}
                alt={name}
                width={200}
                height={200}
                className="object-contain bg-white p-4"
              />
              <span className="text-sm text-white font-medium">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsMenu;
