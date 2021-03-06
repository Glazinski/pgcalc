import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    background-color: ${({theme}) => theme.colors.dirtyWhite};
    position: relative;
`;

const H1 = styled.h1`
    position: absolute;
    left: 5%;
    color: ${({theme}) => theme.colors.primary};
    font-weight: ${({theme}) => theme.font.bold};
    font-size: ${({theme}) => theme.fontSize.l};
`;

// const Img = styled.img`
//     position: absolute;
//     right: 5%;
//     height: 45px;
// `;

const Header = () => {
    return (
        <>
            <StyledHeader>
                <H1>Kalkulator punktów</H1>
            </StyledHeader>
        </>
    );
};

export default Header;