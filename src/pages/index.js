import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import LatestSermon from '../components/latestSermon';
import About from '../components/about';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <Hero overlayColor="rgba(80, 85, 90, 0.75)" />
    <LatestSermon />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
