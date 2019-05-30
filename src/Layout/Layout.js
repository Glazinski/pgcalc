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
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
            </Helmet>
            <GlobalStyles />
            {children}
        </>
    </ThemeProvider>
    
  );
}

export default Layout;