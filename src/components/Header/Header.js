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
    left: 3%;
`;

const Header = () => {
    return (
        <>
            <StyledHeader>
                <H1>Elo</H1>
            </StyledHeader>
        </>
    );
};

export default Header;