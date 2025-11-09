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
          <>
            <p>
              Word range: {minWords}–{maxWords}
            </p>
            {wordCount < minWords && (
              <p className="text-red-500">Too short! Add more words.</p>
            )}
            {wordCount > maxWords && (
              <p className="text-red-500">Too long! Try shortening it.</p>
            )}
            {wordCount >= minWords && wordCount <= maxWords && (
              <p className="text-green-600">✅ Within word range.</p>
            )}
          </>
        )}

        {targetReadingTime !== undefined && (
          <p>Target reading time: {targetReadingTime} min</p>
        )}
      </div>
    </div>
  );
}
