import React from 'react';
import styled from 'styled-components';
import H2 from '../H2/H2.js';

const StyledSection = styled.section`
    height: 300px;
    margin-top: 69px;
    position: relative;
`;

const ClipDiv = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    clip-path: polygon(40% 0, 0 48%, 0 0);
    background: ${({theme}) => theme.colors.secondary};
    z-index: -1;
`;

const H1 = styled.h1 `
    position: absolute;
    left: 5%;
    top: 15%;
    color: ${({theme}) => theme.colors.dark};
    font-weight: ${({theme}) => theme.font.bold};
    font-size: ${({theme}) => theme.fontSize.l};
`;

const StyledWrapper = styled.div`
    z-index: 1;
`;

const StyledDiv = styled.div`
    height: 120px;
    width: 100%;
`;


const Rules = (props) => {
    return (
        <StyledSection>
            
            <ClipDiv></ClipDiv>
            <StyledDiv>
                <H1>Zasady liczenia punktów</H1>
            </StyledDiv>

            <StyledWrapper>
                <h1>ELO</h1>
            </StyledWrapper>
            
        </StyledSection>
    );
}

export default Rules;