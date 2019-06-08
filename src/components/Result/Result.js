import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyTest = keyframes`
    0% {
        left: -10px;
    }
    100% {
        left: 50%;
    }
`;

const StyledDiv = styled.div`
    display: ${({close}) => close ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    padding: 10px;

    position: absolute;
    text-align: center;
    z-index: 2;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 1px solid ${({theme}) => theme.colors.dark};
    animation: ${keyTest} .5s ease-in-out 0s 1;
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.dark};
    box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.75);
`;

const StyledButton = styled.button`
    background: none;
    border: none;
    color: ${({theme}) => theme.colors.red};
    padding: 10px;
    margin-left: 10px;
    font-size: ${({theme}) => theme.fontSize.xl};
    transition: transform .4s ease-in-out;
    :hover {
        cursor: pointer;
        transform: rotate(180deg);
    }
`;

const H3 = styled.h3`
    font-size: ${({theme}) => theme.fontSize.xxl};
    font-weight: 400;
`;
/* animation: ${keyTest} 2s ease-in-out 0s 1; */
const Result = (props) => {
    return (
        <StyledDiv data={props.resultComp} close={props.close}>
            <H3>Wynik: {props.data}</H3>
            <StyledButton onClick={props.handleClick}><i className="fas fa-times"></i></StyledButton> 
        </StyledDiv>
    );
};

export default Result;