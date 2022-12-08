import styled from "styled-components";

export const StyledSideBar = styled.aside`
    max-width: 362px;
    width: 90%;
    display:flex;
    height: 100vh;

    @media screen and (max-width:${({ theme }) => theme.breakpoints.tablet}) {
            display: none;
    }
`


export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary_700};
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 22%;
`


export const StyledInnerWrapper = styled.div`
        color:${({ theme }) => theme.colors.primary_300};
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        flex-grow: 1;

        .nav-footer > img{
            border-top: 2px solid ${({ theme }) => theme.colors.primary_600};
            padding-top: ${({ theme }) => theme.spacing.xl} ;
            cursor:pointer;

            &:hover{
                opacity:.85;
            }
        }

        /* Adding a margin top to each element except the firs one */
        .nav-header > * + *,
        .nav-footer > ul > * + *,
        .nav-footer > * + *{
            margin-top: ${({ theme }) => theme.spacing.lg};
        }
`


export const StyledSideBarIcon = styled.li`
    cursor: pointer;
    transition: all 400ms ease-out;

    svg{
        width: 24px;
        height: 24px;
    }

    span{
        margin-left:  ${({ theme }) => theme.spacing.md};
    }
    
   
    :hover{
        background-color: ${({ theme }) => theme.colors.primary_600};
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        border-radius: ${({ theme }) => theme.radius.sm};
    }

    &.active{
        background-color: ${({ theme }) => theme.colors.primary_600};
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        border-radius: ${({ theme }) => theme.radius.sm};
    }


    &.text-present{
        display: flex;
        align-items: center;

        svg{
            color:${({ theme }) => theme.colors.primary_300};
        }

        &.active{
            background-color: ${({ theme }) => theme.colors.primary_700};
            padding: ${({ theme }) => theme.spacing.sm};
        }

        :hover{
            padding: ${({ theme }) => theme.spacing.sm};
        }
    }
`
