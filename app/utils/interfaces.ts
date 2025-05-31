export interface WordData {
  word: string;
  orientation: "across" | "down";
  startRow: number;
  startCol: number;
  color?: string;
  fontSize?: string; // This will now sometimes hold fixed pixel values
  fontFamily?: string;
}

export interface CrosswordGridCell {
  letter: string;
  occupied: boolean;
  wordColor: string | null;
  wordFontSize: string | null;
  wordFontFamily: string | null;
}

export interface CrosswordData {
  gridSize: { rows: number; cols: number };
  words: WordData[];
}