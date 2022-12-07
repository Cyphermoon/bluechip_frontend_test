import styled from "styled-components";


export const StyledLogo = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    cursor: pointer;

    img:hover{
        opacity:.8;
    }

    h2{
        display:none;
    }
`