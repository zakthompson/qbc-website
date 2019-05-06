import React, { useState, useEffect } from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import styles from './header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  function onScroll() {
    if (!scrolled && window.scrollY >= 200) {
      setScrolled(true);
    } else if (window.scrollY < 200) {
      setScrolled(false);
    }
  }

  function scrollDown() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (<StaticQuery
    query={query}
    render={data => (
      <header className={`${styles.header}${scrolled ? ` ${styles.scrolled}` : ''}`}>
        <Link to="/">
          <Img
            fixed={data.logoImage.childImageSharp.fixed}
          />
        </Link>
        {scrolled && <div className={styles.name}>
          <h6>Queensway</h6>
          <h6>Baptist Church</h6>
        </div>}
        <div className={styles.fill} />
        <div className={styles.visit} onClick={scrollDown}>Plan a Visit</div>
      </header>
    )}
  />);
}

export const query = graphql`
  query {
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed,
        },
      },
    },
  }
`;

export default Header
