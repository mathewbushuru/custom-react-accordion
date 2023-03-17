import { Accordion } from "./components/Accordion";

import DUMMY_DATA from "../DUMMY_DATA";

import "./App.css";

function App() {
  return (
    <div className="App">
      Accordion
      <Accordion data={DUMMY_DATA} />
    </div>
  );
}

export default App;
