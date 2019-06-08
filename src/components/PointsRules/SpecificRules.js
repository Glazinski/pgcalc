import React from 'react';
import styled from 'styled-components';
import H2 from '../H2/H2.js';

const StyledSelect = styled.select`
    display: block;
    background-color: ${({theme}) => theme.colors.white};
    margin: 0 auto;
    padding: 5px 50px;
`;

const StyledOption = styled.option`
    display: block;
    padding: 5px 50px;
`;

const StyledText = styled.div`
    width: 90%;
    height: auto;
    padding: 10px;
    margin: 5px auto;
    line-height: 130%;
    text-align: center;

    ${({theme}) => theme.queries.desktop} {
        width: 70%;
    }
`;

const SpecificRules = (props) => {

    const rulesComp = props.rules.map(item => {
        return (
            <StyledOption 
                key={item.title}
                value={item.title.toLowerCase()}
            >
                {item.title}
            </StyledOption>
        );
    });

    const text = props.rules.find(item => {
        return props.selectValue === item.title.toLowerCase();
    });

    return (
        <> 
            <StyledSelect
                value={props.selectValue} 
                onChange={props.handleChange}
            >
                {rulesComp}
            </StyledSelect>

            <StyledText>
                <H2 marg>Kierunki studiów</H2>
                {text.text}
            </StyledText>
        </>
    );
}

export default SpecificRules;