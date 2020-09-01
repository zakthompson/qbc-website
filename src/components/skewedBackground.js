import React from "react"
import PropTypes from "prop-types"
import Media from "react-media"
import styles from "./skewedBackground.module.css"

const skewedBackground = ({ className, color, offset, children }) => (
  <Media query="(max-width: 640px)">
    {matches => {
      let offsetFactor = 1

      if (matches) {
        offsetFactor = 0.25
      }

      const modifiedOffset = offset * offsetFactor

      return (
        <div
          className={`${styles.wrapper} ${className}`}
          style={{
            marginLeft: `${modifiedOffset}px`,
            marginRight: `${
              modifiedOffset < 0
                ? Math.abs(modifiedOffset)
                : `-${modifiedOffset}`
            }px`,
          }}
        >
          <div className={styles.content}>{children}</div>
          <div
            className={styles.background}
            style={{
              backgroundColor: color,
            }}
          ></div>
        </div>
      )
    }}
  </Media>
)

skewedBackground.propTypes = {
  color: PropTypes.string.isRequired,
  offset: PropTypes.number,
  children: PropTypes.node.isRequired,
}

skewedBackground.defaultProps = {
  offset: 0,
}

export default skewedBackground
