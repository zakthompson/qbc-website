import React from 'react';
import BgImg from 'gatsby-background-image';
import { StaticQuery, graphql } from 'gatsby';
import SkewedBackground from './skewedBackground';
import styles from './sermonsHero.module.css';

const Hero = ({ overlayColor }) => (
  <StaticQuery
    query={query}
    render={data => (
      <BgImg
        className={styles.heroImage}
        Tag="section"
        fluid={data.heroImage.childImageSharp.fluid}
      >
        <div
          className={styles.overlay}
          style={{
            backgroundColor: overlayColor,
          }}
        />
        <div className={styles.titleWrap}>
          <SkewedBackground
            color="#222"
            offset={-75}
          >
            <h1>Sermon</h1>
          </SkewedBackground>
          <SkewedBackground
            color="#555"
            offset={75}
          >
            <h1>Archive</h1>
          </SkewedBackground>
        </div>
      </BgImg>
    )}
  />
)

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid,
        },
      },
    },
  }
`;

export default Hero;
