import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image, index }) => {
  console.log("image " + image.childImageSharp.fluid)
  return (
    <article className="project">
      <Image className="project-img" fluid={image.childImageSharp.fluid} />
      <div className="project-info">
        <span className="project-number">
          {index + 1 <= 9 ? 0 + "" + (index + 1) : index + 1}.
        </span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          {url != "" ? (
            <a href={github}>
              <FaShareSquare className="project-icon" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
