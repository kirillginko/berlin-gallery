import React, { useEffect, useState, useRef } from "react"
import "../styles/home.css"
import sampleData from "../utils/sampleData"
import Item, { MediaItem } from "../components/Item"
import Layout from "../components/Layout"

// another example https://codedaily.io/tutorials/60/Create-a-useMousePosition-Hook-with-useEffect-and-useState-in-React
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)

    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return mousePosition
}

export default () => {
  const { x, y } = useMousePosition()
  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <>
      <div className="header">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/756df50f27534b0e85b0384ab8c34334022e71fd/d6864/static/e26e4001841e1935b3c5555f65f27ec0/epilog_panelright_en.svg"
          alt=""
        />
      </div>
      <div className="page__wrapper">
        <div className="project__list">
          {[...sampleData].map(({ title, mediaUrl, mediaType }, index) => (
            <Item
              key={index}
              title={title}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
        <div className="project__media">
          {sampleData.map(({ mediaUrl, mediaType }, index) => {
            const isActive = index === activeIndex
            const xPos = isActive ? x : 0
            const yPos = isActive ? y : 0
            return (
              <>
                <MediaItem url={mediaUrl} x={xPos} y={yPos} active={isActive} />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
