import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header/index';
import Footer from './Footer/index';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Colors from './../styles/settings/colors';
import Gaps from './../styles/settings/gaps';
import Fonts from './../styles/settings/fonts';
import Normalize from './../styles/generic/normalize';
import Reset from './../styles/generic/reset';
import Elements from './../styles/base/elements';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Colors />
      <Gaps />
      <Fonts />
      <Normalize />
      <Reset />
      <Elements />

      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
