import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import LatestSermon from '../components/latestSermon';
import About from '../components/about';

const IndexPage = ({ location }) => (
  <Layout pathName={location.pathName}>
    <Hero overlayColor="rgba(80, 85, 90, 0.75)" />
    <LatestSermon />
    <About />
  </Layout>
)

export default IndexPage
