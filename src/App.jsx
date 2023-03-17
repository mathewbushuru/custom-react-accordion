import { Accordion } from "./components/Accordion";

import "./App.css";

const DUMMY_DATA = [
  {
    title: "Section 1",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio cumque beatae laudantium numquam assumenda fugiat aut nisi eveniet quis molestiae, consequuntur, debitis, hic maxime ipsa vel non nihil nulla.",
  },
  {
    title: "Section 2",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio cumque beatae laudantium numquam assumenda fugiat aut nisi eveniet quis molestiae, consequuntur, debitis, hic maxime ipsa vel non nihil nulla.",
  },
  {
    title: "Section 3",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio cumque beatae laudantium numquam assumenda fugiat aut nisi eveniet quis molestiae, consequuntur, debitis, hic maxime ipsa vel non nihil nulla.",
  },
];

function App() {
  return (
    <div className="App">
      Accordion
      <Accordion data={DUMMY_DATA} />
    </div>
  );
}

export default App;
