//import { css } from 'styled-components';
export const theme = {
    colors: {
        white: '#FFFFFF',
        dirtyWhite: '#F3F3F3',
        black: '#000000',
        primary: '#125491',
        secondary: '#D2D2D2',
        lightBlack: '#707070',
        dark: '#4A4A4A',
    },
    font: {
        regular: '400',
        bold: 'bold',
    },
    fontSize: {
        xs: '0.9rem',
        m: '1rem',
        l: '1.2rem',
    },
    borderSize: '23px',
    queries: {
        smallDesktop: '@media (min-width: 500px)',
        desktop: '@media (min-width: 700px)',
        bigDesktop: '@media (min-width: 1180px)',
    },
    // arrow: {
    //     down: `
    //     border-left: 10px solid transparent;
    //     border-right: 10px solid transparent;
    //     border-top: 10px solid #125491;`,

    //     up: `
    //     border-left: 10px solid transparent;
    //     border-right: 10px solid transparent;
    //     border-bottom: 10px solid #125491;`
    // }
    // gritTemplate: (column, row) => {
    //     css`
    //         display: grid;
    //         grid-template-column: repeat();
    //         grid-template-rows: repeat();

    //     `
    // }
};