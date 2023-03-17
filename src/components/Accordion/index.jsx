import React, { useState } from "react";

import "./Accordion.css";

export const Accordion = ({ data }) => {
  return (
    <>
      <div className="accordion">
        {data.length ? (
          data.map((data) => (
            <AccordionItem
              key={crypto.randomUUID()}
              title={data.title}
              content={data.content}
            />
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
};

function AccordionItem({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
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
  );
}
