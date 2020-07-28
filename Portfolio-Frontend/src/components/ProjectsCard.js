import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const ProjectCard = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
}) => {
  return (
    <div className="blog">
      <article>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            {" "}
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>
            {url != null ? (
              <a href={url}>
                <FaShareSquare className="project-icon" />
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="blog-footer">
            {stack.map(item => {
              return <p key={item.id}>{item.title}</p>
            })}
          </div>
        </div>
      </article>
    </div>
  )
}

ProjectCard.propTypes = {}

export default ProjectCard
