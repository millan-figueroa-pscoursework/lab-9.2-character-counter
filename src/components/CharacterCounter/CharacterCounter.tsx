import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import type { CharacterCounterProps, TextStats } from "../../types";

export default function CharacterCounter({
  minWords,
  maxWords,
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

  const getReadingTimeinMns = (wordCount: number) => {
    const wpm = 200; // avg wpm
    return wordCount / wpm;
  };

  // tells TextInput component how to update state in parent
  const handleTextChange = (value: string) => {
    setText(value);
  };

  // declare variables to assign them in TextStats
  const wordCount = wordCounter(text);
  //   const readingTime = getReadingTimeinMns(wordCount);

  const stats: TextStats = {
    characterCount: text.length,
    wordCount: wordCounter(text),
    readingTime: getReadingTimeinMns(wordCount),
  };

  return (
    <div className="w-full">
      <h1 className="border border-gray-400 rounded-lg text-3xl text-gray-400 font-bold py-6 mb-4">
        Character Counter
      </h1>

      <TextInput
        // updates parent state w new text
        onTextChange={handleTextChange}
        placeholder="Type your text..."
        initialValue=""
      />
      <div className="mt-6">
        <StatsDisplay
          stats={stats}
          showReadingTime={true}
          minWords={minWords}
          maxWords={maxWords}
        />
      </div>
    </div>
  );
}
