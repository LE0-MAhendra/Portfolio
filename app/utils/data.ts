import { fontFamilies, generateRandomColor } from "./helpers";
import { CrosswordData, WordData } from "./interfaces";

export const crosswordData: CrosswordData = {
    gridSize: { rows: 10, cols: 11 },

    words: (() => {
        const LEOMAHENDRA_START_ROW = 3;
        const LEOMAHENDRA_START_COL = 0;
        const LEOMAHENDRA_H_COL = LEOMAHENDRA_START_COL + 5;
        const LEOMAHENDRA_FIRST_E_COL = LEOMAHENDRA_START_COL + 1;
        const LEOMAHENDRA_LAST_A_COL = LEOMAHENDRA_START_COL + 10;

        const PYTHON_H_INDEX = 3;
        const PYTHON_START_ROW = LEOMAHENDRA_START_ROW - PYTHON_H_INDEX;
        const PYTHON_START_COL = LEOMAHENDRA_H_COL; // This is the column where 'H' of LEOMAHENDRA and 'P' of PYTHON intersect.

        const PYTHON_T_ROW = PYTHON_START_ROW + 2;
        const PYTHON_T_COL = PYTHON_START_COL;
        const DOTNET_T_INDEX = 2;
        const DOTNET_START_ROW = PYTHON_T_ROW;
        const DOTNET_START_COL = PYTHON_T_COL - DOTNET_T_INDEX;
        const DOTNET_N_COL = DOTNET_START_COL + 3;

        const GOLANG_A_INDEX = 3;
        const GOLANG_START_ROW = LEOMAHENDRA_START_ROW - GOLANG_A_INDEX;
        const GOLANG_START_COL = LEOMAHENDRA_LAST_A_COL;

        const NEXTJS_E_INDEX = 1;
        const NEXTJS_START_ROW = LEOMAHENDRA_START_ROW - NEXTJS_E_INDEX;
        const NEXTJS_START_COL = LEOMAHENDRA_FIRST_E_COL;

        const NESTJS_START_ROW = DOTNET_START_ROW;
        const NESTJS_START_COL = DOTNET_N_COL;

        const GSAP_START_ROW = PYTHON_START_ROW;
        const GSAP_START_COL = PYTHON_START_COL - 3;

        const wordsConfig: WordData[] = [
            {
                word: "LEOMAHENDRA",
                orientation: "across",
                startRow: LEOMAHENDRA_START_ROW,
                startCol: LEOMAHENDRA_START_COL,
                color: "#81D4FA",
            },
            {
                word: "DOTNET",
                orientation: "across",
                startRow: DOTNET_START_ROW,
                startCol: DOTNET_START_COL,
            },
            // Add GSAP word
            {
                word: "GSAP",
                orientation: "across",
                startRow: GSAP_START_ROW,
                startCol: GSAP_START_COL,
            },
            {
                word: "NEXTJS",
                orientation: "down",
                startRow: NEXTJS_START_ROW,
                startCol: NEXTJS_START_COL,
            },
            {
                word: "PYTHON",
                orientation: "down",
                startRow: PYTHON_START_ROW,
                startCol: PYTHON_START_COL,
            },
            {
                word: "LINUX",
                orientation: "down",
                startRow: LEOMAHENDRA_START_ROW,
                startCol: LEOMAHENDRA_START_COL,
            },
            {
                word: "MERN",
                orientation: "down",
                startRow: LEOMAHENDRA_START_ROW,
                startCol: LEOMAHENDRA_START_COL + 3,
            },
            {
                word: "GOLANG",
                orientation: "down",
                startRow: GOLANG_START_ROW,
                startCol: GOLANG_START_COL,
            },
            {
                word: "REACT",
                orientation: "down",
                startRow: LEOMAHENDRA_START_ROW,
                startCol: LEOMAHENDRA_START_COL + 9,
            },
            {
                word: "DJANGO",
                orientation: "down",
                startRow: LEOMAHENDRA_START_ROW,
                startCol: LEOMAHENDRA_START_COL + 8,
            },
            {
                word: "NESTJS",
                orientation: "down",
                startRow: NESTJS_START_ROW,
                startCol: NESTJS_START_COL,
            },
        ];

        const availableFontFamilies = [...fontFamilies];
        for (let i = availableFontFamilies.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableFontFamilies[i], availableFontFamilies[j]] = [
                availableFontFamilies[j],
                availableFontFamilies[i],
            ];
        }
        let fontFamilyCounter = 0;
        const options = ["text-base", "text-lg", "text-xl", "text-2xl"]

        return wordsConfig.map((word, index) => {
            const isLeomahendra = word.word === "LEOMAHENDRA";
            const wordColor = isLeomahendra ? word.color : generateRandomColor(index);
            let wordFontSize: string;
            let wordFontFamily: string;

            if (isLeomahendra) {
                wordFontSize = "lg:text-[60px] md:text-[30px]";
                wordFontFamily = "Exile, system-ui";
            } else {
                wordFontSize = `lg:${options[Math.floor(Math.random() * options.length)]} text-base`;


                if (fontFamilyCounter >= availableFontFamilies.length) {
                    fontFamilyCounter = 0;
                }
                wordFontFamily = availableFontFamilies[fontFamilyCounter++];
            }

            return {
                ...word,
                color: wordColor,
                fontSize: wordFontSize,
                fontFamily: wordFontFamily,
            };
        });
    })(),
};

export const skills = {
    Languages: [
        { Python: "/skills/python.png" },
        { JavaScript: "/skills/javascript.png" },
        { TypeScript: "/skills/typescript.png" },
        { Go: "/skills/go.png" },
        { Java: "/skills/java.png" },
        { Nodejs: "/skills/nodedotjs.png" },
    ],
    Frameworks: [
        { Django: "/skills/django.png" },
        { React: "/skills/react.png" },
        { Nextjs: "/skills/nextdotjs.png" },
        { Nestjs: "/skills/nestjs.png" },
        { Express: "/skills/express.png" },
    ],
    Cloud: [
        { AWS: "/skills/aws.png" },
        { Linux: "/skills/linux.png" },
        { Docker: "/skills/docker.png" },
    ],
    Testing: [
        { Postman: "/skills/postman.png" },
        { Jest: "/skills/jest.png" },
    ],
    AI: [
        { PyTorch: "/skills/pytorch.png" },
        { HuggingFace: "/skills/huggingface.png" },
        { TensorFlow: "/skills/tensorflow.png" },
    ],
    Tools: [
        { "socket.io": "/skills/socketio.png" },
        { Scrapy: "/skills/scrapy.png" },
        { Bootstrap: "/skills/bootstrap.png" },
        { Tailwind: "/skills/tailwindcss.png" },
        { GSAP: `/skills/scrapy` }
    ],
};


export const ResumeLink = "https://drive.google.com/file/d/1o49dOIJ19fIUMgDrWMsRVmuQLjqcO6OU/view?usp=drive_link"