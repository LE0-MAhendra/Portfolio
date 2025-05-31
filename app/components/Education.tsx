// EducationSection.tsx
"use client"; // This directive is for Next.js 13+ App Router to mark as a Client Component

import React from "react";
import { GraduationCap } from "lucide-react";
import { educationData } from "../utils/EduData";
// Example icon from lucide-react, assuming it's available or similar icon library

const EducationSection: React.FC = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center py-16 px-4 md:px-8 text-white font-inter"
      id="Education"
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        {/* Left Column: Vertical "Education" Heading */}
        <div className="flex-none w-full md:w-1/4 relative h-32 md:h-auto flex items-center justify-center">
          <h1
            className="
              text-6xl md:text-7xl lg:text-8xl text-white
              absolute
              transform rotate-0 md:-rotate-90
              origin-center
              whitespace-nowrap md:top-[150px]
            "
          >
            Education
          </h1>
        </div>

        {/* Right Column: Education Contents */}
        <div className="flex-grow w-full md:w-3/4 space-y-12">
          {educationData.map((entry) => (
            <div
              key={entry.id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center mb-2">
                <GraduationCap className="text-blue-400 text-5xl mr-3" />
                <h3 className="text-3xl font-bold text-white max-sm:text-xl">
                  {entry.degree}
                </h3>
              </div>
              <p className="text-blue-300 text-xl font-semibold mb-1">
                {entry.institution}
              </p>
              <p className="text-gray-400 text-base mb-4">{entry.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
