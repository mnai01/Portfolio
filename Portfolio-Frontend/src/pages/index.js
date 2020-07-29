import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import ProjectsCards from "../components/ProjectsCards"
import SEO from "../components/SEO"

// allStrapiProjects(filter: { feature: { eq: true } })
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
      <SEO
        title="Ian Matlak | Portfolio"
        description="This is Ian Matlak's portfolio"
      />
      <Hero />
      {/* <Services /> */}
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showlink />
      {/* <ProjectsCards projects={projects} title="All Projects" showlink /> */}
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
