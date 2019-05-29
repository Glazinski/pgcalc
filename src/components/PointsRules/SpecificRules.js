import React from 'react';
import styled from 'styled-components';
import shortid from 'short-id';
import H2 from '../H2/H2.js';

const StyledSelect = styled.select`
   
    display: block;
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
`;

const SpecificRules = (props) => {

    const rulesComp = props.data.map(item => {
        return (
            <StyledOption 
                key={item.title}
                value={item.title.toLowerCase()}
            >
                {item.title}
            </StyledOption>
        );
    });

    const text = props.data.find(item => {
        return props.selectValue === item.title.toLowerCase();
    });

    console.log(text);

    return (
        <> 
            <StyledSelect 
                value={props.selectValue} 
                onChange={props.handleChange}
            >
                {rulesComp}
            </StyledSelect>

            <StyledText>
                {text.text}
            </StyledText>
        </>
    );
}

export default SpecificRules;