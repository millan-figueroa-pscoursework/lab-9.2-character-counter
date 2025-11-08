import "./index.css";
import { useState } from "react";
import TextInput from "./components/TextInput/TextInput";
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";

function App() {
  // holds typed value, updates value, initializes to empty string
  const [text, setText] = useState("");

  // tells TextInput component how to update state in parent
  const handleTextChange = (value: string) => {
    setText(value);
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
      {/* displays character count by using .length */}
      <p className="mt-2 text-gray-600">Character count: {text.length}</p>
    </>
  );
}

export default App;
