import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaGithub,
  FaConnectdevelop,
  FaDev,
  FaAward,
  FaAddressCard,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/ian-matlak-a8385b163/",
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/mnai01",
  },
  {
    id: 3,
    icon: <FaAward className="social-icon"></FaAward>,
    url:
      "https://devpost.com/mnai01?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
  },
  // {
  //   id: 4,
  //   icon: <FaAddressCard className="social-icon"></FaAddressCard>,
  //   url:
  //     "https://drive.google.com/file/d/1b7zPwv_qXcgfdb3fMoYW8tEV5ix2dnu4/view?usp=sharing",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
