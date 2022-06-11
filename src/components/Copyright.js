// dependencies
import React from 'react';
import { CopyrightText } from './styles/typography';

const Copyright = () => {
  const thisYear = new Date().getFullYear();

  return (
    <CopyrightText>
      Copyright &copy; 2020-{thisYear} - jacobandes.dev
    </CopyrightText>
  );
};

export default Copyright;
