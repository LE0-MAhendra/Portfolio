import { CrosswordGridCell, WordData } from "./interfaces";

export const generateRandomColor = (index: number): string => {
    const hue = (index * 137.508) % 360;
    return `hsl(${hue}, 70%, 60%)`;
};

export const fontFamilies = [
    "Arial, sans-serif",
    "Verdana, sans-serif",
    "Georgia, serif",
    "Times New Roman, serif",
    "Courier New, monospace",
    "Lucida Sans Unicode, sans-serif",
    "Impact, sans-serif",
    "Palatino Linotype, serif",
    "Trebuchet MS, sans-serif",
    "monospace",
    "sans-serif",
    "serif",
];

export const createEmptyGrid = (rows: number, cols: number): CrosswordGridCell[][] => {
    const grid: CrosswordGridCell[][] = Array(rows)
        .fill(null)
        .map(() =>
            Array(cols).fill({
                letter: "",
                occupied: false,
                wordColor: null,
                wordFontSize: null,
                wordFontFamily: null,
            })
        );
    return grid;
};

export const populateGrid = (
    grid: CrosswordGridCell[][],
    words: WordData[]
): CrosswordGridCell[][] => {
    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));

    const leomahendraWord = words.find((w) => w.word === "LEOMAHENDRA");
    if (leomahendraWord) {
        const {
            word,
            orientation,
            startRow,
            startCol,
            color,
            fontSize,
            fontFamily,
        } = leomahendraWord;
        for (let i = 0; i < word.length; i++) {
            let row = startRow;
            let col = startCol;
            if (orientation === "across") {
                col += i;
            } else {
                row += i;
            }
            if (
                row >= 0 &&
                row < newGrid.length &&
                col >= 0 &&
                col < newGrid[0].length
            ) {
                if (newGrid[row] && newGrid[row][col]) {
                    newGrid[row][col] = {
                        letter: word[i].toUpperCase(),
                        occupied: true,
                        wordColor: color || null,
                        wordFontSize: fontSize || null, // Pass the '100px' string here
                        wordFontFamily: fontFamily || null,
                    };
                }
            }
        }
    }

    words
        .filter((w) => w.word !== "LEOMAHENDRA")
        .forEach((wordObj) => {
            const {
                word,
                orientation,
                startRow,
                startCol,
                color,
                fontSize,
                fontFamily,
            } = wordObj;
            for (let i = 0; i < word.length; i++) {
                let row = startRow;
                let col = startCol;

                if (orientation === "across") {
                    col += i;
                } else {
                    row += i;
                }

                if (
                    row >= 0 &&
                    row < newGrid.length &&
                    col >= 0 &&
                    col < newGrid[0].length
                ) {
                    if (newGrid[row] && newGrid[row][col]) {
                        if (
                            newGrid[row][col].wordColor === "#81D4FA" &&
                            newGrid[row][col].letter === word[i].toUpperCase()
                        ) {
                            // Intentionally left blank as clue numbers are removed.
                        } else if (
                            !newGrid[row][col].occupied ||
                            newGrid[row][col].letter === word[i].toUpperCase()
                        ) {
                            newGrid[row][col] = {
                                letter: word[i].toUpperCase(),
                                occupied: true,
                                wordColor: color || null,
                                wordFontSize: fontSize || null,
                                wordFontFamily: fontFamily || null,
                            };
                        } else {
                            console.warn(
                                `Conflict: Cell (${row},${col}) already occupied by "${newGrid[row][col].letter}" when trying to place "${word[i]}".`
                            );
                        }
                    }
                } else {
                    console.warn(
                        `Word "${word}" at (${startRow},${startCol}) goes out of bounds at letter "${word[i]}" at (${row},${col}).`
                    );
                }
            }
        });
    return newGrid;
};