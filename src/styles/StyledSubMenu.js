import styled from "styled-components";

export const StyledSubMenu = styled.div`
    flex-grow:1;
    background-color: ${({ theme }) => theme.colors.primary_800};
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};

`

export const StyledSubMenuHeader = styled.div`
    flex-grow:1;
    background-color: ${({ theme }) => theme.colors.primary_800};
    color:${({ theme }) => theme.colors.primary_100};
   

    p {
        margin-bottom:${({ theme }) => theme.spacing.lg};
      
    }

    p,
    li{
        font-size: ${({ theme }) => theme.typeScale.text_md};
        font-weight: 500;
    }

    ul > * + *{
        margin-top:${({ theme }) => theme.spacing.md}
    }
`

