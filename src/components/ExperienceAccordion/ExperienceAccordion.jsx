import { useState } from "react";
import "./ExperienceAccordion.css";

export function ExperienceAccordion({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`accordion ${expanded ? "expanded" : ""}`}>
      <h3>
        <button
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <img
            alt={`Arrow indicating ${expanded ? "expanded" : "collapsed"}`}
            src="/assets/caret.svg"
            width="20"
          />
          <span>{title}</span>
        </button>
      </h3>
      <div className="accordion-content">
        <p>{children}</p>
      </div>
    </div>
  );
}
