import React from "react";
import styled from 'styled-components';
import H2 from '../H2/H2.js';

const StyledSection = styled.section`
    height: 70vh;
`;
const StyledForm = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    justify-content: center;
    align-items: center;

    padding: 5px;
    text-align: center;
    border: .5px solid ${({theme}) => theme.colors.lightBlack};
    width: 95vw;
    height: 350px;
    margin: 5vh auto;
    border-radius: ${({theme}) => theme.borderSize};
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 27%;
        left: 7%;
        width: 80vw;
        height: 2px;
        background-color: ${({theme}) => theme.colors.lightBlack};
    }
`;

const StyledInput = styled.input`
    width: 77px;
    height: 26px;
    margin: auto auto;
    text-align: center;
    
    /* ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    } */
`;

const StyledCheckbox = styled.input`

`;

const Form = () => {
    return (
        <StyledSection>
            <StyledForm>
                <H2>Przedmiot</H2>
                <H2>Poziom Podstawowy<br />(%)</H2>
                <H2>Poziom Rozszerzony<br />(%)</H2>
                <H2 isReg>Przedmiot główny</H2>
                <StyledInput 
                    type='text'
                />
                <StyledInput 
                    type='text'
                />
                <H2 isReg>Język polski</H2>
                <StyledInput 
                    type='text'
                />
                <StyledInput 
                    type='text'
                />
                <H2 isReg>Język obcy</H2>
                <StyledInput 
                    type='text'
                />
                <StyledInput 
                    type='text'
                />
            </StyledForm>

            <StyledCheckbox 
                    type='checkbox'
            />
        </StyledSection>
    );
}

export default Form;