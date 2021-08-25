import React from "react"

export default ({ title, setActiveIndex, index }) => (
  <div
    className="project__item"
    onMouseEnter={() => setActiveIndex(index)}
    onMouseLeave={() => setActiveIndex(-1)}
  >
    <h3 className="project__title">
      <span>{title}</span>
    </h3>
  </div>
)
