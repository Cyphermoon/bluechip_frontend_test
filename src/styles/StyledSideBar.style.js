import styled from "styled-components";

export const StyledSideBar = styled.section`
    max-width: 375px;
    width: 90%;
    display:flex;
    height: 100vh;
`


export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary_700};
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
    display:flex;
    flex-direction: column;
    align-items: center;

    ul{
        padding:0;
        margin:0;
        list-style: none;
    }
`


export const StyledInnerWrapper = styled.div`
        color:${({ theme }) => theme.colors.primary_300};
        font-size: ${({ theme }) => theme.typeScale.text_md};
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        flex-grow: 1;

        .nav-footer > img{
            border-top: 2px solid ${({ theme }) => theme.colors.primary_600};
            padding-top: 1.75rem;
        }

        .nav-header > * + *,
        .nav-footer > ul > * + *,
        .nav-footer > * + *{
            margin-top: ${({ theme }) => theme.spacing.lg};
        }
`


export const StyledSideBarIcon = styled.li`

`
