import styled from 'styled-components';

const H2 = styled.h2`
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fontSize.m};
    font-weight: ${({theme, isReg}) => isReg ? theme.font.regular :theme.font.bold};
`;

export default H2;