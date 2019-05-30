import React from "react";
import styled from 'styled-components';
import H2 from '../H2/H2.js';
import shortid from 'short-id';

const StyledSection = styled.section`
    height: auto;
    width: 100%;
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

        /* query for desktop */
        ${({theme}) => theme.queries.desktop} {
            width: 85%;
        }
    }

    /* query for desktop */
    ${({theme}) => theme.queries.desktop} {
        width: 95%;
        padding: 0;
    }

    ${({theme}) => theme.queries.bigDesktop} {
        max-width: 500px;
        padding: 5px;
    }
`;

const Button = styled.button`
    width: 95px;
    height: 34px;
    border-radius: 17px;
    
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    border: none;

    margin: auto auto;
    margin-bottom: -5px;
    grid-column: 1;

    :hover {
        cursor: pointer;
    }

    /* query for desktop */
    ${({theme}) => theme.queries.desktop} {
        margin-left: 15%;        
    }
`;

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start; */
    position: absolute;
    bottom: -24%;

    width: auto;
    margin: auto auto;
    
    padding: 5px;
`;

const ClipDiv = styled.div`
    clip-path: polygon(100% 35%, 40% 100%, 100% 100%);
    background: ${({theme}) => theme.colors.primary};
    height: 100%;
    width: 100%;
    bottom: -30%;
    position: absolute;

    /* query for desktop */
    ${({theme}) => theme.queries.desktop} {
        display: none;
    }
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

const StyledCheckbox = styled.input`
    grid-column: 1;
    margin-left: 15%;
    position: relative;
    margin-bottom: 15px;

    ::after {
        content: 'Matura dwujęzyczna';
        font-size: ${({theme}) => theme.fontSize.xs};
        width: 200px;
        height: auto;
        position: absolute;
        left: 120%;
        top: -14%;
    }
`;

const Form = (props) => {
    return (
        <StyledSection>
            <ClipDiv></ClipDiv>
            <StyledForm onSubmit={props.handleSubmit} id="imp" key='aq0'>
                <H2>Przedmiot</H2>
                <H2>Poziom Podstawowy<br />(%)</H2>
                <H2>Poziom Rozszerzony<br />(%)</H2>
                <H2 isReg>Przedmiot główny</H2>
                <StyledInput
                    disabled={props.extMain ? true : null}
                    type='number'
                    name="basicMain"
                    onChange={props.handleChange}
                    value={props.basicMain === 0 ? '' : props.basicMain }
                />
                <StyledInput
                    disabled={props.basicMain ? true : null}
                    type='number'
                    name="extMain"
                    onChange={props.handleChange}
                    value={props.extMain === 0 ? '' : props.extMain}
                />
                <H2 isReg>Język polski</H2>
                <StyledInput
                    disabled={props.extPolish ? true : null}
                    type='number'
                    name="basicPolish"
                    onChange={props.handleChange}
                    value={props.basicPolish === 0 ? '' : props.basicPolish}
                />
                <StyledInput 
                    disabled={props.basicPolish ? true : null}
                    type='number'
                    name="extPolish"
                    onChange={props.handleChange}
                    value={props.extPolish === 0 ? '' : props.extPolish}
                />
                <H2 isReg>Język obcy</H2>
                <StyledInput
                    disabled={props.extForeign ? true : null}
                    type='number'
                    name="basicForeign"
                    onChange={props.handleChange}
                    value={props.basicForeign === 0 ? '' : props.basicForeign}
                />
                <StyledInput
                    disabled={props.basicForeign ? true : null}
                    type='number'
                    name="extForeign"
                    onChange={props.handleChange}
                    value={props.extForeign === 0 ? '' : props.extForeign}
                />
                <StyledWrapper>
                    <StyledCheckbox type='checkbox' />
                    <Button>Policz</Button>
                </StyledWrapper>
            </StyledForm>
        </StyledSection>
    );
}

export default Form;