import React from 'react';
import styled from 'styled-components';
import shortid from 'short-id';
import H2 from '../H2/H2.js';

const StyledUl = styled.ul`
    border: 1px solid black;
    transition: display 1s ease-in;
`;

const StyledLi = styled.li`
    display: ${({clicked}) => clicked ? 'block' : 'none'};
`;

const SpecificRules = (props) => {
    console.log(props.data)
    const rulesComponent = props.data.map(item => {
        return <StyledUl
            onClick={() => props.handleClick(item.id)}
            key={item.id}
        > {item.title}
            <StyledLi key={shortid.generate()} clicked={item.clicked}>
                {item.text}
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