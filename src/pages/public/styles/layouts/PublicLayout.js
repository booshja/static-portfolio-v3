// dependencies
import React from 'react';
import { useSelector } from 'react-redux';
// styles
import { ThemeProvider } from 'styled-components';
// components
import { Outlet } from 'react-router';
import { Copyright, Header, Socials } from '../../../../components';
// state
import { selectTheme } from '../../../../redux/slices/themeSlice';

const PublicLayout = () => {
  const currentTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Socials />
      <Copyright />
      <Outlet />
    </ThemeProvider>
  );
};

export default PublicLayout;
