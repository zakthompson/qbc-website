/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Meta from './meta';
import Header from './header';
import Contact from '../components/contact';

import './layout.css';

const Layout = ({ title, pathName, children }) => {
  const isHome = pathName !== '/';

  return (
    <>
      <Meta title={title} />
      <Header isHome={isHome} />
      <div>
        {children}
      </div>
      <Contact />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
