/* eslint-disable */

// dependencies
import { createSlice } from '@reduxjs/toolkit';
// styles
import { THEMES, lightTheme } from '../../styles/themes';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: lightTheme,
    themeNumber: 0,
  },
  reducers: {
    setNextTheme: (state) => {
      if (state.themeNumber === 3) {
        state.themeNumber = 0;
        state.currentTheme = THEMES[0];
        localStorage.setItem('theme', 'Light');
      } else {
        localStorage.setItem('theme', THEMES[state.themeNumber + 1].themeName);
        state.currentTheme = THEMES[state.themeNumber + 1];
        state.themeNumber += 1;
      }
    },
    setThemeNumber: (state, action) => {
      state.themeNumber = action.payload;
    },
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setNextTheme, setThemeNumber, setCurrentTheme } =
  themeSlice.actions;
export const selectTheme = (state) => state.theme.currentTheme;

export default themeSlice.reducer;
