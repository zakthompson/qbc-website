import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./header.module.css"

const Header = ({ isHome }) => {
  const [scrolled, setScrolled] = useState(false)

  function onScroll() {
    if (!scrolled && window.scrollY >= 200) {
      setScrolled(true)
    } else if (window.scrollY < 200) {
      setScrolled(false)
    }
  }

  function scrollDown() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <StaticQuery
      query={query}
      render={data => (
        <header
          className={`${styles.header}${scrolled ? ` ${styles.scrolled}` : ""}`}
        >
          <Link to="/">
            <Img fixed={data.logoImage.childImageSharp.fixed} />
            {(isHome || scrolled) && (
              <div className={styles.name}>
                <h6>Queensway</h6>
                <h6>Baptist Church</h6>
              </div>
            )}
          </Link>
          <div className={styles.fill} />
          <Link className={styles.link} to="/sermons">
            Sermons
          </Link>
          <div className={styles.visit} onClick={scrollDown}>
            Plan a Visit
          </div>
        </header>
      )}
    />
  )
}

Header.propTypes = {
  isHome: PropTypes.bool,
}

Header.defaultProps = {
  isHome: false,
}

export const query = graphql`
  query {
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Header
