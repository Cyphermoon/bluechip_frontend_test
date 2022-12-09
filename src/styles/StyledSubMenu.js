import styled from "styled-components";

export const StyledSubMenu = styled.div`
    flex-grow:1;
    background-color: ${({ theme }) => theme.colors.primary_800};
    padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledSubMenuHeader = styled.div`
    flex-grow:1;
    background-color: ${({ theme }) => theme.colors.primary_800};
    color:${({ theme }) => theme.colors.primary_100};
   

    p {
        margin-bottom:${({ theme }) => theme.spacing.lg};
      
    }

    p,li{
        font-size: ${({ theme }) => theme.typeScale.text_md};
        font-weight: 500;
    }

    ul > * + *{
        margin-top:${({ theme }) => theme.spacing.md}
    }
`

export const StyledSubMenuFooter = styled.div`
    p{
        color: ${({ theme }) => theme.colors.white};
        font-weight: 500;
        font-size: ${({ theme }) => theme.typeScale.text_sm}
    }

    svg{
        color: ${({ theme }) => theme.colors.primary_300};
        cursor:pointer;
        transition: transform 300ms ease-out;

        &:hover{
            transform: scale(1.25);
            opacity:.85;
        }
    }

    small{
        font-weight: 400;
        color: ${({ theme }) => theme.colors.primary_200};
    }
`


