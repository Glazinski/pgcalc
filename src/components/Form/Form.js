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

const ClipDiv = styled.div`
    clip-path: polygon(100% 35%, 40% 100%, 100% 100%);
    background: ${({theme}) => theme.colors.primary};
    height: 100%;
    width: 100%;
    bottom: -30%;
    /* if result is true*/
    transition: bottom .5s ease-in-out;
    bottom: ${({res}) => res > 0 ? `-39%` : null};
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
    appearance: none;
    border: 1px solid ${({theme}) => theme.colors.lightBlack};
    outline: none;
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    :focus {
        box-shadow: 0px 0px 3px 0px ${({theme}) => theme.colors.lightBlack};
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
    /* if result is true*/
    transition: bottom .5s ease-in-out;
    bottom: ${({res}) => res > 0 ? `-35%` : null};
    width: auto;
    margin: auto auto;
    
    padding: 5px;
`;

const StyledCheckbox = styled.input`

    grid-column: 1;
    margin-left: 15%;
    margin-bottom: 15px;
    position: relative;
    width: 30px;
    height: 15px;
    appearance: none;
    background: ${({theme}) => theme.colors.secondary};
    outline: none;
    border-radius: 20px;
    transition: background .5s ease-in-out;

    :checked {
        background: ${({theme}) => theme.colors.primary};
    }

    ::before {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: ${({theme}) => theme.colors.dirtyWhite};
        transform: scale(1.1);
        box-shadow: 0 2px 5px rgba(0,0,0,.2);
        transition: left ease-in-out.5s;
    }

    :checked::before {
        left: 15px;
    }
    ::after {
        content: 'Matura dwujęzyczna';
        font-size: ${({theme}) => theme.fontSize.xs};
        width: 200px;
        height: auto;
        position: absolute;
        left: 120%;
        top: -10%;
    }

    :hover {
        cursor: pointer;
    }
`;

const Button = styled.button`
    width: 95px;
    height: 34px;
    border-radius: 17px;
    
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    border: none;

    outline: none;
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

const StyledResult = styled.div`
    position: relative;
    margin-left: 5%;
    margin-bottom: 10px;
    grid-column: -1 / 1;
    text-align: start;
    color: ${({theme}) => theme.colors.dark};
    font-size: ${({theme}) => theme.fontSize.xl};

    transition: opacity .5s ease-in-out;

    opacity: ${({res}) => res > 0 ? `1` : `0`};

    ::before {
        content: '';
        display: ${({res}) => res > 0 ? `block` : `none`};
        position: absolute;
        width: 24px;
        height: 24px;
        left: -5px;
        top: -4px;
        background-color: ${({theme}) => theme.colors.secondary};
        z-index: -1;
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
    
    const res = props.resultComp > 0 ? `Wynik: ${props.resultComp}` 
    : null;

    return (
        <StyledSection>
            <ClipDiv res={props.resultComp}></ClipDiv>
            <StyledForm 
                onSubmit={props.handleSubmit} 
                id="imp" 
                key='aq0'
                res={props.resultComp}
            >
                <H2>Przedmiot</H2>
                <H2>Poziom Podstawowy<br />(%)</H2>
                <H2>Poziom Rozszerzony<br />(%)</H2>

                {inputsComp}

                <StyledWrapper res={props.resultComp}>
                    <StyledResult res={props.resultComp}>
                        {res}
                    </StyledResult>
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