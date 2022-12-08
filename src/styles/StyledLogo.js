import styled from "styled-components";


export const StyledLogo = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    img:hover{
        opacity:.8;
    }

    h2{
        margin-left:${({ theme }) => theme.spacing.sm};
        font-size: 1.23rem;
    }
`