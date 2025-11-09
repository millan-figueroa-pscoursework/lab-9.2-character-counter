import "./index.css";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
  );
}

export default App;
