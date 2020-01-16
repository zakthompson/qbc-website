import React from "react"
import BgImg from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"
import SkewedBackground from "./skewedBackground"
import styles from "./about.module.css"

const About = () => (
  <StaticQuery
    query={query}
    render={data => {
      const text = data.directusPastorsMessage.text.split("\n").join("<br />")
      return (
        <section className={styles.wrap}>
          <div className={styles.about}>
            <SkewedBackground color="#222">
              <h2>{data.directusPastorsMessage.headline}</h2>
            </SkewedBackground>
            <div
              className={styles.aboutText}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </div>
          <div className={styles.image}>
            <BgImg
              className={styles.imageWrap}
              Tag="div"
              fluid={data.image.childImageSharp.fluid}
              style={{
                backgroundSize: "",
                backgroundPosition: "",
              }}
            />
          </div>
        </section>
      )
    }}
  />
)

export const query = graphql`
  query {
    directusPastorsMessage {
      headline
      text
    }
    image: file(relativePath: { eq: "esl.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
