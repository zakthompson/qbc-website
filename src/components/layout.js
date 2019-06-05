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

const Layout = ({ pathName, children }) => {
  const isHome = pathName !== '/';

  return (
    <>
      <Meta />
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
}

export default Layout
