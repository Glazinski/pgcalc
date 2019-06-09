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
    height: 680px;
    width: 100%;

    position: absolute;
    z-index: -1;
`;

const ContactForm = styled.form`
    position: relative;

    display:flex;
    align-items: center;
    flex-direction: column;
    height: 430px;
    width: 80%;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.lightBlack};
    margin: 60px auto 0 auto;

    ${({theme}) => theme.queries.desktop} {
        height: 500px;
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

    /* margin: 5% 0 5% 50%; */
    margin: 20px 0 20px 100px;
    grid-area: b;

    transition: box-shadow .4s ease-in-out;

    :hover {
        cursor: pointer;
        box-shadow: 0px 11px 13px -10px ${({theme}) => theme.colors.red};
    }

    ${({theme}) => theme.queries.smallDesktop} {
        margin: 20px 0 20px 150px;
    }

    ${({theme}) => theme.queries.desktop} {
        margin: 20px 0 20px 200px;
    }
`;

const Icon = styled.i`
    display: block;
    
    color: black;
    text-decoration: none;
    font-size: 2rem;
    grid-area: g;

    
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
            <ContactForm 
                name="contact"
                method="POST"
                netlify
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <StyledInput
                    name="name"
                    type="email"
                    placeholder="Twój e-mail"
                />
                <StyledArea 
                    name="message"
                    placeholder="Coś jest nie tak albo chcesz wystawić opinie? Daj mi znać"
                />
                <StyledWrapper>
                <Button type="submit">Wyślij</Button>

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