import styled from "styled-components";

export const StyledDashBoard = styled.main`
    flex-grow: 1;
    padding: ${({ theme }) => theme.spacing.xxl}  0 ;
`

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2{
        margin-bottom: ${({ theme }) => theme.spacing.xs} ;
    }

    p{
        font-size: ${({ theme }) => theme.typeScale.text_md};
    }

    .button-space > * + *{
        margin-left:${({ theme }) => theme.spacing.md}
    }

    @media screen and (max-width:${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        h2{
            margin-bottom: ${({ theme }) => theme.spacing.sm} ;
        }

        & > * + *{
            margin-top: ${({ theme }) => theme.spacing.xxl}
        }
    }
`