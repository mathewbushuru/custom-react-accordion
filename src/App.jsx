import { SimpleAccordion } from "./components/SimpleAccordion";

import DUMMY_DATA from "../DUMMY_DATA";

import "./App.css";

function App() {
  return (
    <div className="App">
      Simple Accordion
      <SimpleAccordion data={DUMMY_DATA} />
    </div>
  );
}

export default App;
