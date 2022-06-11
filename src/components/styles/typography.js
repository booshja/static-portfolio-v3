// dependencies
import styled from 'styled-components';
// components
import { Link, NavLink } from 'react-router-dom';

/** Text *********************************************** */
const LoadingText = styled.p`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 3rem;
  margin-top: 2rem;
`;

const CopyrightText = styled.p`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 1.2rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

const FollowMe = styled.p`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2rem;
  transform: rotate(-90deg);
  width: 100px;
  margin-top: 4rem;
`;

/** Links ********************************************** */
const WebsiteName = styled(Link)`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 2rem;
  flex-basis: 25%;
  text-decoration: none;
  color: ${({ theme: t }) => t.textPrimary};
`;

const StyledNavLink = styled(NavLink)`
  font-family: Sen, sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  text-decoration: none;
  color: ${({ theme: t }) => t.textPrimary};

  &.active {
    font-weight: 700;
    font-size: 2rem;
  }
`;

const ResultLink = styled(Link)`
  font-family: Poppins, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-decoration: underline;
  color: ${({ theme: t }) => t.textPrimary};

  &:hover {
    filter: brightness(60%);
  }
`;

/** Headers ******************************************** */
const ResultText = styled.h2`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 3rem;
  margin: 2rem 0;
`;

export {
  CopyrightText,
  FollowMe,
  LoadingText,
  ResultLink,
  ResultText,
  StyledNavLink,
  WebsiteName,
};
