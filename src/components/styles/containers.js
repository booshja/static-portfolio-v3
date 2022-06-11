// dependencies
import styled from 'styled-components';

/** Generics ******************************************* */
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

/** Containers ***************************************** */
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 3rem 0 3rem;
  background-color: transparent;
  color: ${({ theme: t }) => t.textPrimary};
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
`;

const SocialsContainer = styled.aside`
  position: fixed;
  left: 1rem;
  top: calc(25vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  padding: 1rem 0 5rem 0;
  background-color: transparent;

  a {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    color: ${({ theme: t }) => t.textPrimary};

    &:hover {
      filter: brightness(90%);
    }

    &:focus-visible {
      outline: 1px solid ${({ theme: t }) => t.textSecondary};
    }
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${(p) => (p.size ? `${p.size}rem` : '10rem')};
  color: ${({ theme: t }) => t.textPrimary};
  align-items: center;
`;

const WebsiteNameContainer = styled.div`
  flex-basis: 25%;
`;

/** Accent Div's *************************************** */
const VerticalAccentDiv = styled.div`
  width: 2px;
  height: 200px;
  background-color: ${({ theme: t }) => t.accent};
  margin-bottom: 2rem;
`;

export {
  ColumnFlex,
  HeaderContainer,
  Nav,
  SocialsContainer,
  SpinnerContainer,
  WebsiteNameContainer,
  VerticalAccentDiv,
};
