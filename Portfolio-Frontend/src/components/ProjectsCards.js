import React from "react"
import Title from "./Title"
import ProjectsCard from "./ProjectsCard"
import { Link } from "gatsby"

const ProjectsCards = ({ projects, title, showlink }) => {
  return (
    <section className="section" id="projects">
      <Title title={title} />
      <div className="section-center blogs-center">
        {projects.map((project, index) => {
          return <ProjectsCard key={project.id} index={index} {...project} />
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
export default ProjectsCards
