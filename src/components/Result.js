// dependencies
import React from 'react';
// assets
import Fireworks from '../assets/fireworks.jpeg';
import IceCream from '../assets/sad-ice-cream.jpeg';
// components
import { ResultText, ResultLink } from './styles/typography';
import { ColumnFlex, ResultImg } from './styles/containers';

const Result = ({ approval }) => (
  <ColumnFlex>
    <ResultText>
      {approval
        ? "Thank you for the message! I'll get back to you soon!"
        : 'Uh oh, something went wrong!'}
    </ResultText>
    <ResultText>
      Click <ResultLink to="/">here</ResultLink> to go home.
    </ResultText>
    <ResultImg
      src={approval ? Fireworks : IceCream}
      alt={approval ? 'Fireworks.' : 'Dropped ice cream cone.'}
    />
  </ColumnFlex>
);

export default Result;
