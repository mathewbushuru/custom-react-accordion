import React, { useState } from "react";

import "./Accordion.css";

const DUMMY_DATA = {
  title: "Section 1",
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio cumque beatae laudantium numquam assumenda fugiat aut nisi eveniet quis molestiae, consequuntur, debitis, hic maxime ipsa vel non nihil nulla.",
};

export const Accordion = () => {
  const { title, content } = DUMMY_DATA;
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <h1>Accordion Demo</h1>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive((prevState) => !prevState)}
          >
            <div>{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </>
  );
};
