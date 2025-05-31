"use client";
import { ResumeLink } from "@/app/utils/data";
import { Github, Linkedin, Mail, ArrowUp, Scroll } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <footer className=" text-white py-10 px-4 mt-16 rounded-t-xl shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Copyright Section */}
        <div className="text-center md:text-left">
          <p className="text-sm font-light">
            &copy; {new Date().getFullYear()} LeoMAhendra. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Crafted with <span className="text-red-500">&hearts;</span> using
            Next.js, TypeScript, Tailwind and GSAP.
          </p>
        </div>

        {/* Navigation Links Section */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          <Link
            href="#Home"
            className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="#About"
            className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href="#Projects"
            className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Projects
          </Link>
          <Link
            href="#Education"
            className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Education
          </Link>
          <Link
            href="https://leomahendradev.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Blog
          </Link>
        </nav>

        {/* Social Media Links Section */}
        <div className="flex space-x-5">
          <Link
            href="https://github.com/LE0-MAhendra?tab=repositories" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} strokeWidth={1.5} />{" "}
            {/* GitHub icon from Lucide */}
          </Link>
          <Link
            href="https://www.linkedin.com/in/leo-mahendra/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} strokeWidth={1.5} />{" "}
            {/* LinkedIn icon from Lucide */}
          </Link>
          <Link
            href="mailto:mahender.kurikyala11@gmail.com" // Replace with your email address
            className="text-gray-400 hover:text-red-400 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} strokeWidth={1.5} /> {/* Mail icon from Lucide */}
          </Link>
          <Link
            href={ResumeLink}
            className="text-gray-400 hover:text-red-400 transition-all duration-300 transform hover:scale-110 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Scroll />
          </Link>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 right-4 md:static bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
