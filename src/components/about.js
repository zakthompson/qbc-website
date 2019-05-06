import React from 'react';
import BgImg from 'gatsby-background-image';
import { StaticQuery, graphql } from 'gatsby';
import SkewedBackground from './skewedBackground';
import styles from './about.module.css';

const About = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className={styles.wrap}>
        <div className={styles.about}>
          <SkewedBackground color="#222">
            <h2>{data.directusPastorsMessage.headline}</h2>
          </SkewedBackground>
          <p>{data.directusPastorsMessage.text}</p>
        </div>
        <div className={styles.image}>
          <BgImg
            className={styles.vbsWrap}
            Tag="div"
            fluid={data.image.childImageSharp.fluid}
          >
            <div className={styles.campHeader}>
              <SkewedBackground
                color="#FF8C1B"
                offset={-30}
              >
                <h2>Summer Camp</h2>
              </SkewedBackground>
              <SkewedBackground
              color="#FFAD5D"
                offset={30}
              >
                <h2>2019</h2>
              </SkewedBackground>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSgBXFGP8Fc6ziTEyaVWt1dfvSF2Vs-Cq2G1QW38tljwYnVg/viewform?usp=sf_link"
              className={styles.register}
            >
              Click here to register
            </a>
          </BgImg>
        </div>
      </section>
    )}
  />
)

export const query = graphql`
  query {
    directusPastorsMessage {
      headline,
      text
    }
    image: file(relativePath: { eq: "vbs.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid,
        },
      },
    },
  }
`;

export default About;
