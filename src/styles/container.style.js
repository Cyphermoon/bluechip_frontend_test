import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;

    @media screen and (max-width:${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        padding:${({ theme }) => theme.spacing.lg} 0;
    }
`

export const CenterContainer = styled.div`
   width: 95%;
   margin: 0 auto;
`



