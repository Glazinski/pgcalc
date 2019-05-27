import React from 'react';
import styled from 'styled-components';
import shortid from 'short-id';
import H2 from '../H2/H2.js';

const StyledUl = styled.ul`
    width: 82%;
    border-radius: 5px;
    line-height: 23px;
    list-style-type: none;
    text-align: center;
    border: 1px solid ${({theme}) => theme.colors.black};
    padding: 5px;
    transition: display 1s ease-in;
    margin: auto auto 10px auto;
    background-color: ${({theme}) => theme.colors.white};
    position: relative;

    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;

    /* :hover {
        transition: background-color .2s ease-in-out;
        background-color: ${({theme}) => theme.colors.dark};
    } */
`;

const StyledLi = styled.li`
    display: ${({clicked}) => clicked ? 'grid' : 'none'};
    grid-column: -1 / 1;
`;

const Arrow = styled.div`
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid ${({theme}) => theme.colors.primary};
        transition: transform .3s ease-in-out;
        ${({clicked}) => clicked ? `transform: rotate(180deg);` : null}; 
`;

const SpecificRules = (props) => {
    console.log(props.data)
    const rulesComponent = props.data.map(item => {
        return <StyledUl
            onClick={() => props.handleClick(item.id)}
            key={item.id}
            clicked={item.clicked}
        > <H2>{item.title}</H2>
            <Arrow clicked={item.clicked}/>
            <StyledLi key={shortid.generate()} clicked={item.clicked}>
                <br />{item.text}
            </StyledLi>
        </StyledUl>
    });
    return (
        <>
            {rulesComponent}   
        </>
    );
}

export default SpecificRules;