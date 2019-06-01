import React from 'react';
import PropTypes from 'prop-types';
import styles from './skewedBackground.module.css';

const skewedBackground = ({ className, color, offset, children }) => {
  let offsetFactor = 1;
  if (window.innerWidth < 1280) {
    offsetFactor = 0.75;
  }
  if (window.innerWidth < 640) {
    offsetFactor = 0.25;
  }

  const modifiedOffset = offset * offsetFactor;

  return (
    <div
      className={styles.wrapper}
      style={{
        marginLeft: `${modifiedOffset}px`,
        marginRight: `${modifiedOffset < 0 ? Math.abs(modifiedOffset) : `-${modifiedOffset}`}px`,
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
  );
}


skewedBackground.propTypes = {
  color: PropTypes.string.isRequired,
  offset: PropTypes.number,
  children: PropTypes.node.isRequired,
}

skewedBackground.defaultProps = {
  offset: 0,
}

export default skewedBackground;
