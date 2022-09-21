import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, title, showlink }) => {
  console.log(projects)
  return (
    <section className="section projects" id="projects">
      <Title title={title} />
      <div className="section-center project-center">
        {projects
          .sort((a, b) => b.feature - a.feature)
          .map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
      </div>
      {/* {showlink && (
        <Link to="/projects" className="btn center-btn">
          View More
        </Link>
      )} */}
    </section>
  )
}

export default Projects
