import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Layout, Header } from '../components';
import config from '../../config/site';

/**
 * About page example
 *
 * There are two ways of creating pages with Ghost + Gatsby.js:
 *
 * 1. All pages created in Ghost, will be available as a page with Gatsby.
 *    The slug determines the URL for the Gatsby frontend (e. g. slug `contact` will be available under `/contact/`)
 *
 * 2. All pages in the /src/pages directory will automatically be rendered.
 *    The name of the page determines the URL for the Gatsby frontend (e. g. `/src/pages/about.js` will be
 *    available under `/about/`)
 *
 * Important: if the same page URL exists in Ghost and in Gatsby, then the page created via Gatsby will be
 * used instead of the page imported from Ghost.
 *
 */

const Wrapper = styled.div`
  text-align: center;
  padding: 0 6rem;
  margin: 0;
  font-size: 16pt;
`;

const AboutPage = ({ location }) => (
  <>
    {/* Pages that are created with Gatsby need to have their own meta data
     * properties like title and description. You can set them up here, or
     * let the fallback values (siteTitleMeta, siteDescriptionMeta, shareImage) work instead.
     * In that case, you can simply remove title, description, and image here.
     */}
    {/* <MetaData
      location={location}
      title="About Ghost + Gatsby"
      discription="Meta description for this page"
      image="/images/Ghost-Docs.jpg"
    /> */}
    <Layout>
      <Wrapper>
        <p style={{ margin: '0' }}>
          Kirsten Barnett is a Chattanooga, Tennesse based artist whose work revolves around space,
          gender identity, feminism and sex. Kirsten explores these concepts through a multitude of
          medias including painting, photography, and collage. Using these medias, she hopes to
          dissect and question the socially constructed aspects of these topics by using the same
          language they were used to be created with.
        </p>
        <br />
        <p>
          Many people find great comfort in the bathroom towels being the same color pink as the
          soap, toilet, and tiles. This common thread of color creates a connection between them,
          and an environment of order. Home is a place not only of comfort, but control. The
          interior of the home reflects the interior of the mind; the aesthetics and items we decide
          to curate in our homes reflect the interests we have in our lives, and the desires one has
          for themselves. This staging of items creates a sense of order, in whatever form it takes,
          and they act as a shield against the unpredictability and lurking chaos of the outside.
          Yet, sometimes, the interior of the house can feel consuming of our bodily selves, and we
          begin to feel fragmented in the space we have created. My work is an examination of the
          different forms this shield takes, and the thinking that lies behind it. I use domestic
          objects as the common denominators of our personal environment and altering them is a way
          of questioning the attitudes, fears and unwritten rules which have formed that environment
          and our behavior within it.
        </p>
      </Wrapper>
    </Layout>
  </>
);

AboutPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutPage;
