// dependencies
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
// components
import { Link } from 'react-router-dom';
import { PageTitle } from './styles/typography';
import { MainContent, PageContainer } from './styles/containers';
import { Header, Socials, Copyright } from '../../components';
// assets
import SadIceCream from '../../assets/sad-ice-cream.jpeg';
import BugsSaysNo from '../../assets/bugs-bunnys-no.png';
// state
import { selectTheme } from '../../redux/slices/themeSlice';

const NotFoundContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgSecondary};
  min-height: 100vh;
  ${({ wp }) => (wp ? 'display: flex' : null)};
  ${({ wp }) => (wp ? 'align-items: center' : null)};
  ${({ wp }) => (wp ? 'justify-content: center' : null)};
  ${({ wp }) => (wp ? 'margin-top: 0' : null)};
  ${({ wp }) => (wp ? 'padding-top: 0' : null)};
`;

const NotFoundContent = styled(MainContent)`
  flex-direction: column;
  align-items: center;
`;

const NotFoundImg = styled.img`
  height: 75%;
  margin-top: 2rem;
`;

const BugsNoImg = styled.img`
  width: 50%;
  margin-bottom: 4rem;
`;

const NotFoundText = styled.p`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${({ theme: t }) => t.textPrimary};
  margin: 2rem 0 1rem 2rem;
`;

const NotFoundLink = styled(Link)`
  font-size: 3rem;
  font-weight: 700;
  text-decoration: underline;
  color: ${({ theme: t }) => t.textSecondary};

  &:hover {
    filter: brightness(80%);
  }
`;

const NotFound = ({ wordPress }) => {
  const currentTheme = useSelector(selectTheme);

  if (wordPress) {
    return (
      <ThemeProvider theme={currentTheme}>
        <NotFoundContainer wp>
          <BugsNoImg src={BugsSaysNo} alt="Bugs bunny no meme" />
          <NotFoundLink to="/">Go Back</NotFoundLink>
        </NotFoundContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Header notFound />
      <Socials />
      <Copyright />
      <NotFoundContainer>
        <PageTitle>notFound()</PageTitle>
        <NotFoundContent>
          <NotFoundText>Uh oh, couldn&apos;t find that&hellip;</NotFoundText>
          <NotFoundText>
            Click <NotFoundLink to="/">here</NotFoundLink> to go back home.
          </NotFoundText>
          <NotFoundImg
            src={SadIceCream}
            alt="Ice cream dropped on a stone slab"
          />
        </NotFoundContent>
      </NotFoundContainer>
    </ThemeProvider>
  );
};

export default NotFound;
