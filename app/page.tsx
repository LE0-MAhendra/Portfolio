"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import About from "./components/About";
import Home from "./components/Hero";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import SkillsDropdown from "./components/Skills";
import Project from "./components/Project";
import EducationSection from "./components/Education";
import MobileScroll from "./components/MobileScroll";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const checkIsMobile = useCallback(() => {
    // Using 768px as a common breakpoint for 'md' in Tailwind CSS
    return window.innerWidth < 768;
  }, []);
  useEffect(() => {
    setIsMobile(checkIsMobile());
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    window.addEventListener("resize", handleResize);
    sectionsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: i * 0.1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none reverse",
            once: true,
          },
        }
      );
    });
  }, []);
  console.log("mobile", isMobile);

  return (
    <main className="w-[90%] mx-auto h-[100%] overflow-hidden space-y-3">
      <Navbar />
      <div
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
      >
        <Home />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
      >
        <About />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
      >
        <SkillsDropdown />
      </div>
      {/* <div
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
      >
      </div> */}
      <div>{isMobile ? <MobileScroll /> : <Project />}</div>
      <div
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
      >
        <EducationSection />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
