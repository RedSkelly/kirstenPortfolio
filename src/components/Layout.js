/* eslint no-unused-expressions: off */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { SEO, Footer, Header } from './index';

import theme from '../../config/theme';
import reset from '../styles/reset';
import config from '../../config/site';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  
  body {
    background: ${(props) => props.theme.colors.bg};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .gatsby-resp-image-wrapper {
    margin: 2.75rem 0;
  }
`;

const AbsoluteWrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Layout = ({ children, customSEO, noHeader, noHome }) => (
  <ThemeProvider theme={theme}>
    <>
      {!customSEO && <SEO />}
      <GlobalStyle />
      <noscript>To browse this site, please enable JavaScript.</noscript>
      <AbsoluteWrapper>
        {noHeader ? null : (
          <Header
            avatar={config.avatar}
            name={config.name}
            location={config.location}
            socialMedia={config.socialMedia}
            noHome={noHome}
          />
        )}

        {children}
        <Footer />
      </AbsoluteWrapper>
    </>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
  noHome: PropTypes.bool,
  noHeader: PropTypes.bool,
};

Layout.defaultProps = {
  customSEO: false,
  noHome: false,
  noHeader: false,
};
