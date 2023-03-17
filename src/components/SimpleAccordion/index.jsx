import React, { useState } from "react";

import "./SimpleAccordion.css";

export const SimpleAccordion = ({ data }) => {
  return (
    <>
      <div className="simple-accordion">
        {data.length ? (
          data.map((data, index) => (
            <AccordionItem
              key={crypto.randomUUID()}
              title={data.title}
              content={data.content}
              defaultActive={index === 0}
            />
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
};

function AccordionItem({ title, content, defaultActive = false }) {
  const [isActive, setIsActive] = useState(defaultActive);

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
