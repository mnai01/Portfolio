import React, { useState } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Email from "./Email"

const query = graphql`
  {
    file(relativePath: { eq: "FSC-Innovation-Challenge.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const [modal, setModal] = useState(false)

  const handleModal = value => {
    if (value) {
      setModal(value)
    } else {
      setModal(!modal)
    }
  }

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
            <button onClick={() => setModal(!modal)} className="btn">
              Request Resume
            </button>
            <Email modal={modal} handleModal={handleModal} />
            <SocialLinks />
          </div>
        </article>
        <Image fluid={data.file.childImageSharp.fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
