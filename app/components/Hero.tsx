"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap"; // Import gsap from the installed package
import { CrosswordGridCell } from "../utils/interfaces";
import { crosswordData } from "../utils/data";
import { createEmptyGrid, populateGrid } from "../utils/helpers";

function Hero() {
  const { gridSize, words } = crosswordData;
  const [grid, setGrid] = useState<CrosswordGridCell[][]>(
    createEmptyGrid(gridSize.rows, gridSize.cols)
  );
  const gridRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const populatedGrid = populateGrid(
      createEmptyGrid(gridSize.rows, gridSize.cols),
      words
    );
    setGrid(populatedGrid);

    if (gridRef.current) {
      const tl = gsap.timeline();
      const allGridCells = Array.from(gridRef.current.children);

      const wordElementsMap = new Map<string, HTMLElement[]>();

      words.forEach((wordObj) => {
        const currentWordCells: HTMLElement[] = [];
        for (let i = 0; i < wordObj.word.length; i++) {
          let row = wordObj.startRow;
          let col = wordObj.startCol;
          if (wordObj.orientation === "across") {
            col += i;
          } else {
            row += i;
          }
          const cellIndex = row * gridSize.cols + col;
          if (allGridCells[cellIndex]) {
            currentWordCells.push(allGridCells[cellIndex] as HTMLElement);
          }
        }
        wordElementsMap.set(wordObj.word, currentWordCells);
      });

      const animationOrder = [
        "LEOMAHENDRA",
        "PYTHON",
        "DJANGO",
        "REACT",
        "NEXTJS",
        "NESTJS",
        "GOLANG",
        "DOTNET",
        "LINUX",
        "MERN",
      ];

      animationOrder.forEach((wordName) => {
        const elements = wordElementsMap.get(wordName);
        if (elements && elements.length > 0) {
          tl.fromTo(
            elements,
            { opacity: 0, scale: 0.8, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
              stagger: 0.05,
            },
            "-=0.1"
          );
        }
      });
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -10,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, [gridSize.rows, gridSize.cols, words]);

  const getFontFamilyClass = (fontFamily: string | null): string => {
    if (!fontFamily) return "font-sans";
    if (fontFamily.includes("Exile")) return "font-['Exile'] font-sans";
    if (fontFamily.includes("Inter")) return "font-inter";
    if (fontFamily.includes("Arial") || fontFamily.includes("Verdana"))
      return "font-sans";
    if (
      fontFamily.includes("Georgia") ||
      fontFamily.includes("Times New Roman") ||
      fontFamily.includes("Palatino Linotype")
    )
      return "font-serif";
    if (fontFamily.includes("Courier New") || fontFamily.includes("monospace"))
      return "font-mono";
    return "font-sans";
  };

  return (
    <div className="h-auto w-[100%] text-white font-inter flex flex-col mx-auto ">
      <div className="flex flex-col lg:flex-row gap-8  max-w-[80%] items-center justify-center mx-auto">
        <div
          ref={gridRef}
          className={`grid flex-grow max-w-[1000px] aspect-square`}
          style={{
            gridTemplateColumns: `repeat(${gridSize.cols}, minmax(25px, 1fr))`,
            gridTemplateRows: `repeat(${gridSize.rows}, minmax(25px, 1fr))`,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`relative flex items-center justify-center rounded-sm  transition-colors duration-200 ease-in-out
                  ${cell.occupied ? "font-bold" : "font-normal"}
                  ${cell.wordFontSize}
                  ${getFontFamilyClass(cell.wordFontFamily)}
                  `}
                style={{
                  color: cell.occupied
                    ? cell.wordColor === "#81D4FA"
                      ? "#E0F2F7"
                      : cell.wordColor || "#60A5FA"
                    : "transparent",
                }}
              >
                {cell.letter}
              </div>
            ))
          )}
        </div>

        <div className="p-6 flex justify-center items-center">
          <div
            ref={imageRef}
            className="relative rounded-full overflow-hidden border-4 border-blue-400"
          >
            <Image
              src="/mainpic.jpg"
              alt="Floating Image"
              className="w-full h-full object-cover rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
