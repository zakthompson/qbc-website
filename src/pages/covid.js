import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/hero';
import CovidLetter from '../components/covidLetter';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const CovidPage = ({ location }) => {
  return (
    <Layout title="COVID-19" pathName={location.pathName}>
      <Hero overlayColor="rgba(80, 85, 90, 0.75)" />
      <CovidLetter />
    </Layout>
  );
}

export default CovidPage;
