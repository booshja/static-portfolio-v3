// dependencies
import styled from 'styled-components';

/** Generics ******************************************* */
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

/** Containers ***************************************** */
const PageContainer = styled(ColumnFlex)`
  width: 100%;
  height: 100vh;
  margin-top: -60px;
  padding: 8rem 10rem 0 10rem;
`;

const MainContent = styled.div`
  display: flex;
  height: calc(100% - 60px);
`;

const ExpLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ExpRight = styled.div`
  display: flex;
  width: 30%;
`;

const ExpCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
`;

const ExpCard = styled.div`
  background-color: transparent;
  width: 400px;
  height: 300px;
  perspective: 1000px;
  margin-left: 2rem;

  &:hover ${ExpCardInner} {
    transform: rotateY(180deg);
  }
`;

const ExpCardBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme: t }) => t.bgCard};
  color: ${({ theme: t }) => t.textCard};
  transform: rotateY(180deg);
  position: absolute;
  width: 300px;
  height: 300px;
  backface-visibility: hidden;
  padding: 20% 1rem 20% 1rem;
  border: ${({ theme: t }) =>
    t.themeName === 'Light' ? '2px solid #000000' : 'none'};

  & a:nth-of-type(1) {
    margin-bottom: 3rem;
  }
`;

const ExpCardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: t }) => t.bgSecondary};
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const LeftSide = styled(ColumnFlex)`
  width: 60%;
  padding-top: 1rem;
`;

const FormError = styled.div`
  font-family: Poppins, sans-serif;
  border: solid 2px #e9072b;
  border-radius: 4px;
  background-color: #ffcccc;
  color: #000000;
  font-size: 1.4rem;
  padding: 1rem;
  margin: 0 0 1rem 1rem;
`;

/** Dividers ******************************************* */
const LandingDivider = styled.div`
  width: 45%;
  height: 4px;
  background-color: ${({ theme: t }) => t.accent};
  margin-bottom: 3rem;
`;

/** Images ********************************************* */
const MailImg = styled.img`
  width: 100%;
`;

const Screencap = styled.img`
  height: 296px;
`;

export {
  ColumnFlex,
  ExpCard,
  ExpCardBack,
  ExpCardFront,
  ExpCardInner,
  ExpLeft,
  ExpRight,
  FormError,
  LandingDivider,
  LeftSide,
  MainContent,
  MailImg,
  PageContainer,
  Screencap,
};
