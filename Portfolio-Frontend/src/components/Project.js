import React, { useState } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare, FaYoutube } from "react-icons/fa"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

const Project = ({
  description,
  longDescription,
  title,
  github,
  stack,
  url,
  image,
  index,
  video,
}) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Modal open={modal} onClose={() => setModal(false)}>
        <div>
          <span className="project-number">
            {index + 1 <= 9 ? 0 + "" + (index + 1) : index + 1}.
          </span>
          <h3>{title}</h3>
          <Image className="modal_img" fluid={image.childImageSharp.fluid} />
          <p className="project-desc">
            {longDescription != null ? longDescription : description}
          </p>
          <div className="project-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
          <div className="project-links">
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>
            {url != null && url != "" && (
              <a href={url}>
                <FaShareSquare className="project-icon" />
              </a>
            )}
            {video != null && (
              <a href={video}>
                <FaYoutube className="project-icon" />
              </a>
            )}
          </div>
        </div>
      </Modal>
      <article className="project">
        <Image className="project-img" fluid={image.childImageSharp.fluid} />
        <div className="project-info" onClick={setModal}>
          <div>
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
          </div>
          <div className="project-links">
            <a
              href={github}
              // Prevents Parent modal from opening when icon clicked
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <FaGithubSquare className="project-icon" />
            </a>
            {url != null && url != "" && (
              <a
                href={url}
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                <FaShareSquare className="project-icon" />
              </a>
            )}
            {video != null && (
              <a
                href={video}
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                <FaYoutube className="project-icon" />
              </a>
            )}
            <h5 className="project-desc" onClick={setModal}>
              Click card for more details
            </h5>
          </div>
        </div>
      </article>
    </>
  )
}

Project.propTypes = {}

export default Project
