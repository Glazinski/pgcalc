import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: 68vh;
    width: 100%;
    position: relative;
`;

const ClipPath = styled.div`
    
    clip-path: polygon(0 22%, 100% 37%, 100% 100%, 0% 100%);
    background: ${({theme}) => theme.colors.primary};
    height: 100%;
    width: 100%;

    position: absolute;
    z-index: -1;
`;

const ContactForm = styled.form`
    position: relative;

    display:flex;
    align-items: center;
    flex-direction: column;

    height: 80%;
    width: 80%;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.lightBlack};
    margin: 60px auto 0 auto;

    ${({theme}) => theme.queries.desktop} {
        max-width: 500px;
        margin-top: 200px;
    }
`;

const StyledInput = styled.input`
    width: 85%;
    height: 30px;
    margin-top: 20px;
    padding: 10px;
`;
const StyledArea = styled.textarea`
    margin-top: 20px;
    height: 70%;
    width: 85%;
    padding: 10px;
    resize: none;
`;

const Button = styled.button`
    width: 95px;
    height: 34px;
    border-radius: 17px;
    
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    border: none;

    :hover {
        cursor: pointer;
    }

    margin: 5% 0 5% 50%;
    grid-area: b;
`;

const Icon = styled.i`
    display: block;
    
    color: black;
    text-decoration: none;
    font-size: 2rem;
    grid-area: g;

    ${({theme}) => theme.queries.desktop} {
        margin-right: 110px;
    }
`;

const StyledWrapper = styled.div`
    display: grid;
    grid-template-areas: 
        "g b"
    ;
    align-items: center;
    margin: auto auto;
`;

const Footer = (props) => {
    return (
        <StyledFooter>
            <ClipPath></ClipPath>
            <ContactForm onSubmit={props.handleSubmit}>
                <StyledInput
                    type="email"
                    placeholder="Twój e-mail"
                />
                <StyledArea 
                    placeholder="Coś jest nie tak albo chcesz wystawić opinie? Daj mi znać"
                />
                <StyledWrapper>
                <Button>Wyślij</Button>

                <Icon 
                    as="a" 
                    href="https://github.com/Glazinski" 
                    className="fab fa-github"
                    target="_blank"></Icon>
                </StyledWrapper>
            </ContactForm>
            
        </StyledFooter>
    );
}

export default Footer;