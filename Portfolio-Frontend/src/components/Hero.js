import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const data = useStaticQuery(query)
  console.log(data.file.childImageSharp.fluid)
  return (
    <header className="hero" id="home">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-centerage">
            <div className="underline"></div>
            <h1>Hi, I'm Ian</h1>
            <h3>
              Producing high quality responsive websites and exceptional user
              experience
            </h3>
            <h4>Software Developer</h4>
            <a
              href="https://drive.google.com/file/d/1weh6-6UVk9m_-iROvY-OAj4SuN_mjDZ-/view"
              className="btn"
            >
              View Resume
            </a>
            <SocialLinks />
          </div>
        </article>
        {/* <Image fluid={data.file.childImageSharp.fluid} className="hero-img" /> */}
      </div>
    </header>
  )
}

export default Hero
