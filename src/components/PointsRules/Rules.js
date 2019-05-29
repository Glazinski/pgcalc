import React from 'react';
import styled from 'styled-components';
import SpecificRules from './SpecificRules.js';
import H2 from '../H2/H2.js';

const StyledSection = styled.section`
    height: 300px;
    margin-top: 104px;
    position: relative;
`;

const ClipDiv = styled.div`
    height: 300px;
    width: 100%;
    position: absolute;
    clip-path: polygon(40% 0, 0 48%, 0 0);
    background: ${({theme}) => theme.colors.secondary};
    z-index: -1;

    /* query for desktop */
    ${({theme}) => theme.querys.desktop} {
        display: none;
    }
`;

const H1 = styled.h1 `
    color: ${({theme}) => theme.colors.dark};
    font-weight: ${({theme}) => theme.font.bold};
    font-size: ${({theme}) => theme.fontSize.l};
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 100%;
`;


const Rules = (props) => {
    return (
        <StyledSection>
            
            <ClipDiv></ClipDiv>
            <StyledDiv>
                <H1>Przedmioty główne do wyboru</H1>
            </StyledDiv>
            
            <SpecificRules 
                {...props}
                handleClick={props.handleClick}
                handleChange={props.handleChange}
            />
        </StyledSection>
    );
}

export default Rules;