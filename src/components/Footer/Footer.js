import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: auto;
    width: 100%;
    position: relative;
`;

const ClipPath = styled.div`
    
    clip-path: polygon(0 22%, 100% 37%, 100% 100%, 0% 100%);
    background: ${({theme}) => theme.colors.primary};
    height: 62vh;
    width: 100%;

    /* position: absolute;
    z-index: -1; */
    
`;
const Test = styled.div`
    height: 100vh;
    width: 100%;
    background: blue;
`;
const Footer = (props) => {
    return (
        <StyledFooter>
            <ClipPath></ClipPath>
        </StyledFooter>
    );
}

export default Footer;