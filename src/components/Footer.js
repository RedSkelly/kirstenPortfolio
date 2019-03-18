import React from 'react';
import styled from 'styled-components';

const Content = styled.footer`
  color: ${(props) => props.theme.colors.lightGrey};
  text-align: center;
  font-size: 0.9rem;
  padding: 3rem 3rem;
  background: ${(props) => props.theme.colors.bg};
`;

const Footer = () => (
  <Content>
    &copy; 2019 Art Portfolio - Kirsten. Pictures by{' '}
    <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
      Unsplash
    </a>
    . Based on a design by{' '}
    <a href="https://www.lekoarts.de/en" target="_blank" rel="noopener noreferrer">
      LekoArts
    </a>
    .
    {/* <br />
    Have a look at the{' '}
    <a
      href="https://github.com/LekoArts/gatsby-starter-portfolio-emilia"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github repository
    </a>
    ! */}
  </Content>
);

export default Footer;
