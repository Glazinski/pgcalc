import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme.js';
//import { Link } from "gatsby"

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            {children}
        </>
    </ThemeProvider>
    
  );
}

export default Layout;