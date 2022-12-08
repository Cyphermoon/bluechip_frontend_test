import styled from "styled-components";
import { theme } from "./index.style";

export const Button = styled.button`
    border-radius: ${({ theme }) => theme.radius.sm};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typeScale.text_sm};
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ bg }) => !bg ? "transparent" : bg};
    border: 1px ${({ theme }) => theme.colors.gray_300} ${({ outline }) => outline ? "solid" : "none"};
    color: ${({ color }) => !color ? theme.colors.gray_700 : color};
    gap: ${({ theme }) => theme.spacing.sm};
    cursor:pointer;
    box-shadow:0px 1px 2px rgba(16, 24, 40, 0.05);

    &:hover{
        opacity: 0.85;
    }

    &.hidden{
        span{
            display:none;
        }
    }

    svg{
        font-size: ${({ theme }) => theme.typeScale.text_md}; 
    }

    @media screen and (max-width:${({ theme }) => theme.breakpoints.tablet}){
        span{
            display:${({ collapse }) => collapse ? "none" : "inline"}
        }
    }

`