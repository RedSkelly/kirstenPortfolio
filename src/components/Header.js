import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.bg};
  display: flex;
  position: relative;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidths.general};
  padding: 3rem 1.0875rem 3rem 1.0875rem;
  color: ${(props) => props.theme.colors.lightGrey};
  text-align: center;
  height: 400px;

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    height: 380px;
  }
`;

const Avatar = styled.div`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  img {
    border-radius: 50%;
  }
`;

const Name = styled.h1`
  margin: 1rem 0 0.25rem 0;
  color: ${(props) => props.theme.colors.name};
  letter-spacing: 0.2em;
  font-size: 60px;
`;

const Location = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMedia = styled.div`
  margin-top: 2rem;

  a {
    margin: 0 1.5rem;
  }
`;

const Header = ({ avatar, name, location, socialMedia, noHome }) => (
  <Wrapper>
    <Content>
      {/* <Avatar>
        <img src={avatar} alt={name} />
      </Avatar> */}
      <Name>{name}</Name>
      {/* <Location>{location}</Location> */}
      <SocialMedia>
        {noHome ? null : <GatsbyLink to="/">Home</GatsbyLink>}

        {socialMedia.map((social) => (
          <a key={social.name} href={social.url} rel="noopener noreferrer" target="_blank">
            {social.name}
          </a>
        ))}
        <GatsbyLink to="/about">About</GatsbyLink>
      </SocialMedia>
    </Content>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  socialMedia: PropTypes.array.isRequired,
  noHome: PropTypes.bool,
};

Header.defaultProps = {
  noHome: false,
};
