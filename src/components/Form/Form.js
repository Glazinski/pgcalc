import React from "react";
import styled from 'styled-components';
import H2 from '../H2/H2.js';

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

        ${({theme}) => theme.queries.smallDesktop} {
            width: 85%;
        }

        ${({theme}) => theme.queries.desktop} {
            width: 85%;
        }
    }
    ${({theme}) => theme.queries.smallDesktop} {
        max-width: 450px;
    }
    /* query for desktop */
    ${({theme}) => theme.queries.desktop} {
        width: 95%;
    }

    ${({theme}) => theme.queries.bigDesktop} {
        max-width: 450px;
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
    transition: box-shadow .4s ease-in-out;

    :hover {
        cursor: pointer;
        box-shadow: 0px 11px 13px -10px ${({theme}) => theme.colors.red};
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
    //console.log(props.subjects);

    const inputsComp = props.subjects.map((item, i) => 
        
        (<React.Fragment key={item.id}>
                {i === 0 ? 
                    <H2 isReg key={item.titleId}>
                        Przedmiot <br />główny
                    </H2>
                : item.title ? <H2 isReg key={item.titleId}>{item.title}</H2> : null}
                <StyledInput
                    key={item.id}
                    disabled={item.disabled}
                    type="number"
                    name={item.subject}
                    value={item.value}
                    onChange={props.handleChange}
                    maxLength="3"
                />
            </React.Fragment>)
    );

    //console.log(inputsComp)
    return (
        <StyledSection>
            <ClipDiv></ClipDiv>
            <StyledForm onSubmit={props.handleSubmit} id="imp" key='aq0'>
                <H2>Przedmiot</H2>
                <H2>Poziom Podstawowy<br />(%)</H2>
                <H2>Poziom Rozszerzony<br />(%)</H2>

                {inputsComp}

                <StyledWrapper>
                    <StyledCheckbox 
                        type='checkbox'
                        checked={props.checked}
                        onChange={props.handleChange}
                    />
                    <Button>Policz</Button>
                </StyledWrapper>
            </StyledForm>
        </StyledSection>
    );
}

export default Form;