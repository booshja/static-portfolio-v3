// dependencies
import React from 'react';
import { useTheme } from 'styled-components';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
// assets
import { faMountain } from '@fortawesome/free-solid-svg-icons';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  HeaderContainer,
  Nav,
  WebsiteNameContainer,
} from './styles/containers';
import { WebsiteName, StyledNavLink } from './styles/typography';
import { NavButton } from './styles/buttons';
// state
import { setNextTheme } from '../redux/slices/themeSlice';

const Header = ({ notFound }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const location = useLocation();

  const makeBreadcrumbs = (pathname) => {
    if (notFound) return 'notFound()';
    if (pathname === '/') return 'is()';

    const slicedPath = pathname.slice(1);
    const splitPath = slicedPath.split('/');
    let breadcrumbs = `${splitPath[0]}()`;
    if (splitPath.length > 1) {
      for (let i = 1; i < splitPath.length; i + 1) {
        breadcrumbs = `${breadcrumbs}.${splitPath[i]}`;
      }
    }

    return breadcrumbs;
  };

  return (
    <HeaderContainer>
      <WebsiteNameContainer>
        <WebsiteName to="/">
          JacobAndes.
          {makeBreadcrumbs(location.pathname)}
        </WebsiteName>
      </WebsiteNameContainer>
      <Nav>
        <StyledNavLink to="/">.is()</StyledNavLink>
        <StyledNavLink to="/experience">.experience()</StyledNavLink>
        <StyledNavLink to="/about">.about()</StyledNavLink>
        <StyledNavLink to="/contact">.contact()</StyledNavLink>
        {/* <StyledNavLink to="/store">.store()</StyledNavLink> */}
        <NavButton onClick={() => dispatch(setNextTheme())}>
          <FontAwesomeIcon icon={faMountain} />
          {` ${theme.themeName}`}
        </NavButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
