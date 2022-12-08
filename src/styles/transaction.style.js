import styled from "styled-components";

export const StyledTransaction = styled.section`

`

export const StyledFilter = styled.div`
    background-color:${({ theme }) => theme.colors.gray_50};
    border-radius: ${({ theme }) => theme.radius.sm};
    padding:${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    display:flex;
    flex-direction:column;
    gap:${({ theme }) => theme.spacing.md};

    .filter-options{
        & > * + *{
           margin-left:${({ theme }) => theme.spacing.md};
        }
   }

    @media screen and (min-width:${({ theme }) => theme.breakpoints.tablet}){
        justify-content:space-between;
        gap:unset;
        flex-direction:row;

        span{
            display: inline-block;
        }
    }

`

export const StyledFilterOption = styled.div`
    background-color:white;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray_300};
    border-radius: ${({ theme }) => theme.radius.sm};
    display: inline-flex;
    color: ${({ theme }) => theme.colors.gray_700};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

    svg{
        width:20px;
        height:20px;
    }

    span{
        font-size: ${({ theme }) => theme.typeScale.text_sm};
        font-weight: 500;
        display:${({ collapse }) => collapse ? "none" : "inline-block"};
        margin-left: ${({ theme }) => theme.spacing.sm}
    }

    @media screen and (min-width:${({ theme }) => theme.breakpoints.tablet}){
        span{
            display:inline-block;
        }
    }
`

export const StyledSearchBar = styled.form`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    padding:${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.gray_300};
    border-radius: ${({ theme }) => theme.radius.sm};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    max-width:400px;
    width:90%;

    &:focus-within{
        border: 2px solid ${({ theme }) => theme.colors.gray_700};
    }

    svg{
        display:inline-block;
        width:19px;
        height:19px;
        color: ${({ theme }) => theme.colors.gray_500};
    }

    input{
        border:none;
        padding:${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        flex-grow:1;
        height:100%;
        outline:none;
        font-size: ${({ theme }) => theme.typeScale.text_md};
        color: color: ${({ theme }) => theme.colors.gray_500};
        
        &::placeholder{
            font-size: ${({ theme }) => theme.typeScale.text_md};
            color: color: ${({ theme }) => theme.colors.gray_500};
        }
    }
`