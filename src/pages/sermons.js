import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SermonsHero from '../components/sermonsHero';
import Sermon from '../components/sermon';

const SermonsPage = ({ data, location }) => {
  return (
    <Layout pathName={location.pathName}>
      <SermonsHero overlayColor="rgba(80, 85, 90, 0.75)" />
      {data.allDirectusSermon.edges.map(sermon => (
        <Sermon
          title={sermon.node.title}
          url={sermon.node.url}
          context={sermon.node.context}
          speaker={sermon.node.speaker}
        />
      ))}
    </Layout>
  );
}

SermonsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const query = graphql`
  query SermonsPageQuery {
    allDirectusSermon( sort: { fields: [date], order: DESC } ) {
      edges {
        node {
          id,
          title,
          url,
          context,
          speaker
        }
      }
    }
  }
`;

export default SermonsPage;
