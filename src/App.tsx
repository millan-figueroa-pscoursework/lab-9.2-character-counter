import "./index.css";
import { useState } from "react";
import TextInput from "./components/TextInput/TextInput";
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";
import type { TextStats } from "./types";

function App() {
  // holds typed value, updates value, initializes to empty string
  const [text, setText] = useState("");

  // tells TextInput component how to update state in parent
  const handleTextChange = (value: string) => {
    setText(value);
  };

  const stats: TextStats = {
    characterCount: text.length,
    wordCount: 0,
    readingTime: 0,
  };

  return (
    <>
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
    </>
  );
}

export default App;
