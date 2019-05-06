import React from 'react';
import PropTypes from 'prop-types';
import styles from './skewedBackground.module.css';

const skewedBackground = ({ className, color, offset, children }) => (
  <div
    className={styles.wrapper}
    style={{
      marginLeft: `${offset}px`,
      marginRight: `${offset < 0 ? Math.abs(offset) : `-${offset}`}px`,
    }}
  >
    <div className={styles.content}>
      {children}
    </div>
    <div
      className={styles.background}
      style={{
        backgroundColor: color,
      }}
    >
    </div>
  </div>
)

skewedBackground.propTypes = {
  color: PropTypes.string.isRequired,
  offset: PropTypes.number,
  children: PropTypes.node.isRequired,
}

skewedBackground.defaultProps = {
  offset: 0,
}

export default skewedBackground;
