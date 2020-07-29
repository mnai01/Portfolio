import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "experience",
    url: "/experience/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const TempLinks = ({ toggleSidebar }) => {
  return data.map(link => {
    return (
      <li
        key={link.id}
        onClick={() => {
          scrollTo("#" + link.text)
          toggleSidebar()
        }}
      >
        {/* Change to <Link to={link.url}>{link.text}<Link/> for page navigation */}
        <a>{link.text}</a>
      </li>
    )
  })
}
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass, toggleSidebar }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      <TempLinks toggleSidebar={toggleSidebar} />
    </ul>
  )
}
