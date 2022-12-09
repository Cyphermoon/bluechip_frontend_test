import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;

    &.disable-scrolling{
        height:100vh;
        overflow-y:hidden;
    }

    @media screen and (max-width:${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        padding:${({ theme }) => theme.spacing.lg} 0;
    }
`

export const CenterContainer = styled.div`
   width: 92%;
   margin: 0 auto;

   @media screen and (min-width:${({ theme }) => theme.breakpoints.tablet}) {
    width:95%;
}
`



