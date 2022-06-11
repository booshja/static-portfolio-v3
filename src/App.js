// dependencies
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// styles
import GlobalStyle from './styles/globalStyles';
import { THEMES } from './styles/themes';
// components
import Router from './Router';
import { MainContent } from './pages/public/styles/containers';
import { LoadingSpinner } from './components';
// state
import { setCurrentTheme, setThemeNumber } from './redux/slices/themeSlice';

const App = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rememberedTheme = localStorage.getItem('theme');
    if (rememberedTheme) {
      if (rememberedTheme === 'Dark') {
        dispatch(setThemeNumber(1));
        dispatch(setCurrentTheme(THEMES[1]));
      } else if (rememberedTheme === 'Soft') {
        dispatch(setThemeNumber(2));
        dispatch(setCurrentTheme(THEMES[2]));
      } else if (rememberedTheme === 'Sharp') {
        dispatch(setThemeNumber(3));
        dispatch(setCurrentTheme(THEMES[3]));
      }
    } else if (!rememberedTheme) {
      localStorage.setItem('theme', 'Light');
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <MainContent className="center">
        <LoadingSpinner />
      </MainContent>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
