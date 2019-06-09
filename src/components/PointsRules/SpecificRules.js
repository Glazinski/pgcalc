import React from 'react';
import styled from 'styled-components';
import H2 from '../H2/H2.js';

const StyledSelect = styled.select`
    width: 185px;
    border: none;
    background: transparent;
    border: 1px solid ${({theme}) => theme.colors.lightBlack};
    padding: 10px;
    outline: none;
    appearance: none;
    /* appearance: none;
    display: block;
    text-align: center;
    background-color: ${({theme}) => theme.colors.white};
    margin: 0 auto;
    padding: 5px 50px; */
`;

const StyledOption = styled.option`
    appearance: none;
    display: block;
    height: 100px;
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

const MainWrapper = styled.div`

`;

const StyledWrapper = styled.div`
    width: 185px;
    position: relative;
    margin: 0 auto 0 auto;
    background-color: ${({theme}) => theme.colors.white};
    ::after {
        content: 'keyboard_arrow_down';
        font-family: 'Material Icons';
        font-size: ${({theme}) => theme.fontSize.l};
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        pointer-events: none;
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
            <MainWrapper>
                <StyledWrapper>
                    <StyledSelect
                        value={props.selectValue} 
                        onChange={props.handleChange}
                    >
                        {rulesComp}
                    </StyledSelect>
                </StyledWrapper>
            </MainWrapper>

            <StyledText>
                <H2 marg>Kierunki studiów</H2>
                {text.text}
            </StyledText>
        </>
    );
}

export default SpecificRules;