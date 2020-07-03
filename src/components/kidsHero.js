import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./kidsHero.module.css"

const Hero = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className={styles.hero}>
        <h1>Kingdom Kids</h1>
        <Img
          style={{ position: "absolute" }}
          className={styles.crown}
          fixed={data.crownImage.childImageSharp.fixed}
        />
        <Img
          style={{ position: "absolute", display: "none" }}
          className={styles.smallCrown}
          fixed={data.smallCrownImage.childImageSharp.fixed}
        />
      </section>
    )}
  />
)

export const query = graphql`
  query {
    crownImage: file(relativePath: { eq: "crown.png" }) {
      childImageSharp {
        fixed(width: 394, height: 321) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    smallCrownImage: file(relativePath: { eq: "crown.png" }) {
      childImageSharp {
        fixed(width: 197, height: 161) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Hero
