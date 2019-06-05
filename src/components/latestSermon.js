import React from 'react';
import ReactPlayer from 'react-player/lib/players/YouTube';
import { StaticQuery, graphql, Link } from 'gatsby';
import SkewedBackground from './skewedBackground';
import styles from './latestSermon.module.css';

const LatestSermon = () => (
  <StaticQuery
    query={query}
    render={data => {
      const sermons = data.allDirectusSermon.edges.map(e => e.node);
      const latestSermon = sermons.sort((a, b) => ( a.date < b.date ))[0];
      return (
        <section className={styles.section}>
          <div className={styles.videoWrap}>
            <div className={styles.forceAspectRatio} />
            <ReactPlayer
              className={styles.video}
              url={latestSermon.url}
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
          <div className={styles.sermonInfo}>
            <div className={styles.title}>
              <SkewedBackground
                color="#222"
                offset={-30}
              >
                <h2>Latest</h2>
              </SkewedBackground>
              <SkewedBackground
                color="#555"
                offset={30}
              >
                <h2>Sermon</h2>
              </SkewedBackground>
            </div>
            <div className={styles.infoText}>
              <h3>{latestSermon.title}</h3>
              <h4>{`${latestSermon.context} | ${latestSermon.speaker}`}</h4>
            </div>
            <Link className="button primary small" to="/sermons">
              Past Sermons
            </Link>
          </div>
        </section>
      );
    }}
  />
)

export const query = graphql`
  query {
    allDirectusSermon {
      edges {
        node {
          id,
          title,
          speaker,
          context,
          url,
          date,
        }
      }
    }
  }
`;

export default LatestSermon;
