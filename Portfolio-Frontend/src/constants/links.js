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

const tempLinks = data.map(link => {
  return (
    <li
      key={link.id}
      onClick={() => {
        scrollTo("#" + link.text)
        console.log("#" + link.text)
      }}
    >
      {/* Change to <Link to={link.url}>{link.text}<Link/> for page navigation */}
      <a>{link.text}</a>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
