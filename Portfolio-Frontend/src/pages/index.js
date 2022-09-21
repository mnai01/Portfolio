import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
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
        feature
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
      <SEO title="Ian M | Portfolio" description="This is Ian M portfolio" />
      <Hero />
      {/* <Services /> */}
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showlink />
      {/* <ProjectsCards projects={projects} title="All Projects" showlink /> */}
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
