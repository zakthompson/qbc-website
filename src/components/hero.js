import React from 'react';
import BgImg from 'gatsby-background-image';
import { StaticQuery, graphql } from 'gatsby';
import SkewedBackground from './skewedBackground';
import styles from './hero.module.css';

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
            color="#FF8C1B"
            offset={-75}
          >
            <h1>Queensway</h1>
          </SkewedBackground>
          <SkewedBackground
            color="#FFAD5D"
            offset={75}
          >
            <h1>Baptist Church</h1>
          </SkewedBackground>
          <div className={styles.serviceTime}>Sunday Service | 11:00am</div>
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
