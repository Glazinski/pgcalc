import React from "react";
import styled from 'styled-components';
import H2 from '../H2/H2.js';

const StyledSection = styled.section`
    height: auto;
    position: relative;
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
    background: ${({theme}) => theme.colors.white};

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

const Button = styled.button`
    width: 95px;
    height: 34px;
    border-radius: 17px;
    margin: auto auto;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    border: none;
`;

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -20%;

    width: 95vw;
    margin: auto auto;
    padding: 5px;
`;

const ClipDiv = styled.div`
    clip-path: polygon(100% 35%, 40% 100%, 100% 100%);
    background: ${({theme}) => theme.colors.primary};
    height: 100%;
    width: 100%;
    bottom: -20%;
    position: absolute;
`;

const StyledInput = styled.input`
    width: 77px;
    height: 26px;
    margin: auto auto;
    text-align: center;
    
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`;

const Form = (props) => {
    return (
        <StyledSection>
            <ClipDiv></ClipDiv>
            <StyledForm onSubmit={props.handleSubmit}>
                <H2>Przedmiot</H2>
                <H2>Poziom Podstawowy<br />(%)</H2>
                <H2>Poziom Rozszerzony<br />(%)</H2>
                <H2 isReg>Przedmiot główny</H2>
                <StyledInput 
                    type='number'
                />
                <StyledInput 
                    type='number'
                />
                <H2 isReg>Język polski</H2>
                <StyledInput 
                    type='number'
                />
                <StyledInput 
                    type='number'
                />
                <H2 isReg>Język obcy</H2>
                <StyledInput 
                    type='number'
                />
                <StyledInput 
                    type='number'
                />
                <StyledWrapper>
                    <Button>Policz</Button>
                </StyledWrapper>
            </StyledForm>
            
        </StyledSection>
    );
}

export default Form;