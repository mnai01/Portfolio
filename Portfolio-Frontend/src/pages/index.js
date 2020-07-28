import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import ProjectsCards from "../components/ProjectsCards"

// allStrapiProjects(filter: { feature: { eq: true } })
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        github
        url
        description
        longDescription
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          title
          id
        }
      }
    }
  }
`

export default ({ data }) => {
  // given alias
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      {/* <Services /> */}
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showlink />
      {/* <ProjectsCards projects={projects} title="All Projects" showlink /> */}
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
