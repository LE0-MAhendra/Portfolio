"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import { Scroll } from "lucide-react";
import { ResumeLink } from "@/app/utils/data";
gsap.registerPlugin(SplitText);

function Navbar() {
  const textRef = useRef(null);
  const resumeRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "chars" });

    gsap.from(resumeRef.current, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4.out",
    });

    gsap.from(split.chars, {
      y: -100,
      opacity: 0,
      rotation: () => gsap.utils.random(-80, 80),
      duration: 0.7,
      ease: "back.out(1.7)",
      stagger: 0.15,
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <nav className="flex justify-center items-center max-sm:w-[90%] w-full mx-auto p-2 overflow-hidden">
      <div className="flex justify-between w-full">
        <h1
          ref={textRef}
          className="exile-regular font-mono text-center min-sm:text-4xl w-[80%] text-xl"
        >
          Leo Mahendra
        </h1>
        <Link
          ref={resumeRef}
          href={ResumeLink}
          className="text-xl font-bold pointer"
        >
          <button className="px-6 py-2 bg-blue-300 text-black text-xl max-sm:hidden">
            Resume
          </button>
          <button className="bg-yellow-50 p-2 rounded-xl text-black text-xl sm:hidden">
            <Scroll />
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
