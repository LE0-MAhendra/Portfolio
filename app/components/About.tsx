"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

function About() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useGSAP((context) => {
    if (!h1Ref.current || !pRef.current) return;

    const splitChars = new SplitText(h1Ref.current, { type: "chars" });
    const splitLines = new SplitText(pRef.current, {
      type: "lines",
      linesClass: "line",
    });

    context.add(() =>
      gsap.from(splitChars.chars, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    );

    context.add(() =>
      gsap.from(splitLines.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.6,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    );

    return () => {
      splitChars.revert();
      splitLines.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      className="flex flex-col lg:w-[90%] w-full mx-auto gap-6 min-h-screen justify-center"
      id="About"
    >
      <h1 ref={h1Ref} className="sm:text-8xl w-full lg:w-[40%] text-6xl">
        About Me
      </h1>
      <p ref={pRef} className="text-xl font-mono">
        I’m <b>Mahender Yadav</b> a passionate <b>Full Stack Web Developer</b>{" "}
        focused on building dynamic, scalable web applications. I specialize in
        developing <b>Robust Backends </b>
        with multiple languages, and crafting responsive <b>Frontends </b> using
        <b> Modern Frameworks</b>. I also handle end-to-end deployment using
        tools like Docker, Linux servers, and cloud platforms. From RESTful APIs
        to production-ready platforms, I enjoy bringing ideas to life with
        clean, efficient code and a problem-solving mindset.
      </p>
    </div>
  );
}

export default About;
