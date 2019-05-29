import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme.js';
import { Helmet } from 'react-helmet';
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
            <Helmet defaultTitle="pgkalkulator">
                <html lang="pl" />
                <meta name="Description" content="Kalkulator który liczy punkty na podstawie wyników z egzaminu dojrzałości na Politechnikę Gdańską" />
            </Helmet>
            <GlobalStyles />
            {children}
        </>
    </ThemeProvider>
    
  );
}

export default Layout;