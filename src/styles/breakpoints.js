// dependencies
import { css } from 'styled-components';

const breakpoints = (
  cssProp = 'padding',
  cssPropUnits = 'px',
  values = [],
  mediaQueryType = 'min-width',
) => {
  // function for creating media queries for use in styled-components
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    const queries = `${mediaQueries}
        @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
            ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
        }
        `;
    return queries;
  }, '');
  return css([breakpointProps]);
};

const breakpointValues = {
  mobileSm: 360,
  mobileLg: 414,
  tablet: 768,
  desktopSm: 1024,
  desktopMd: 1280,
  desktopLg: 1440,
};

export { breakpoints, breakpointValues };
