import React from "react"
import Title from "./Title"
import Project from "./Project"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        github
        url
        video
        description
        longDescription
        feature
        top
        stack {
          title
          id
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const Projects = ({ title, showlink }) => {
  let {
    allStrapiProjects: { nodes: projects },
  } = useStaticQuery(query)
  projects = [
    ...projects.filter(item => item.top === true),
    ...projects.filter(item => item.top !== true),
  ]
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
