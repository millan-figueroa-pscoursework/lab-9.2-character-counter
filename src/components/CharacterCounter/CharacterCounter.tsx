import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import type { CharacterCounterProps, TextStats } from "../../types";

export default function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps) {
  // holds typed value, updates value, initializes to empty string
  const [text, setText] = useState("");

  const wordCounter = (text: string) => {
    // removes trailing spaces from text value
    const trimmedText = text.trim();
    // if user tabs or types nothing it doesnt count as a word (return 0 words)
    if (trimmedText.length === 0) {
      return 0;
    }
    // creates array of each word (using split() method and add space between quotes)
    const wordsArray = trimmedText.split(" ");
    return wordsArray.length;
  };

  // placeholder stats
  const stats: TextStats = {
    characterCount: text.length,
    wordCount: wordCounter(text),
    readingTime: 0,
  };

  // tells TextInput component how to update state in parent
  const handleTextChange = (value: string) => {
    setText(value);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold underline mb-4">Character Counter</h1>

      <TextInput
        // updates parent state w new text
        onTextChange={handleTextChange}
        placeholder="Type your text..."
        initialValue=""
      />
      <div className="mt-6">
        <StatsDisplay stats={stats} showReadingTime={true} />
      </div>

      {/* conditional rendering optional props */}
      <div className="mt-4 text-sm text-gray-500">
        {minWords !== undefined && maxWords !== undefined && (
          <p>
            Word range: {minWords}–{maxWords}
          </p>
        )}
        {targetReadingTime !== undefined && (
          <p>Target reading time: {targetReadingTime} min</p>
        )}
      </div>
    </div>
  );
}
