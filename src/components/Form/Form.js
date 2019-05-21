import React from "react";
import styled from 'styled-components';
import H2 from '../H2/H2.js';

const StyledSection = styled.section`
    height: 40vh;
`;
const StyledForm = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;

    padding: 5px;
    text-align: center;
    border: .5px solid ${({theme}) => theme.colors.lightBlack};
    width: 95vw;
    height: 325px;
    margin: 5vh auto;
    border-radius: ${({theme}) => theme.borderSize};
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 33%;
        left: 7%;
        width: 80vw;
        height: 1px;
        background-color: black;
    }
`;

const StyledInput = styled.input`
    width: 77px;
    height: 22px;
    margin: auto auto;
    text-align: center;
`;

const Form = () => {
    return (
        <StyledSection>
            <StyledForm>
                <H2>Przedmiot</H2>
                <H2>Poziom Podstawowy<br />(%)</H2>
                <H2>Poziom Rozszerzony<br />(%)</H2>
                <H2 isReg>Matematyka</H2>
                <StyledInput 
                    type='text'
                />
                <StyledInput 
                    type='text'
                />
                <H2 isReg>Przedmiot</H2>
                <StyledInput 
                    type='text'
                />
                <StyledInput 
                    type='text'
                />
            </StyledForm>
        </StyledSection>
    );
}

export default Form;