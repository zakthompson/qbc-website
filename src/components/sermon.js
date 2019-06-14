import React from "react"
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/lib/players/YouTube';
import styles from './sermon.module.css';

const Sermon = ({ url, title, context, speaker }) => (
  <div className={styles.sermon}>
    <div className={styles.videoWrap}>
      <div className={styles.forceAspectRatio}>
        <ReactPlayer
          className={styles.video}
          url={url}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
          controls
          light
        />
      </div>
    </div>
    <div className={styles.sermonInfo}>
      <div className={styles.infoText}>
        <h3>{title}</h3>
        <h4>{`${context} | ${speaker}`}</h4>
      </div>
    </div>
  </div>
);

Sermon.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
};

export default Sermon;
