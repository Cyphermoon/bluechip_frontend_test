import styled from "styled-components";
import { CenterContainer } from "./container.style";
import { Flex } from "./util.style";

export const StyledDashBoard = styled.main`
    flex-grow: 1;
    padding: ${({ theme }) => theme.spacing.xxxl}  0 ;

    ${CenterContainer}{
         & > * + *{
            margin-top: ${({ theme }) => theme.spacing.xxxl};
         }
    }

    @media screen and (max-width:${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.xxl}  0 ;
       
    }
`

export const StyledCard = styled.div`
    border-radius: ${({ theme }) => theme.radius.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    transition: transform 100ms ease-in;

    & > * + *{
        margin-top:${({ theme }) => theme.spacing.sm};
    }

    :hover{
        transform: translateY(-5%)
    }

    ${Flex}{
        span{
            font-size: ${({ theme }) => theme.typeScale.text_md};
            font-weight: 500;
            color: ${({ theme }) => theme.colors.gray_900};
        }

        svg{
            color: ${({ theme }) => theme.colors.gray_400};
            font-size: ${({ theme }) => theme.typeScale.text_md};
            cursor:pointer;
        }
    }

    h1{
        color: ${({ theme }) => theme.colors.gray_900};
        margin-top:${({ theme }) => theme.spacing.xl};
    }

    .card-footer{
        display:flex;
        justify-content: space-between;
    }

    .card-footer > div.info{
        display:flex;
        align-items:center;

        .percentage-changed{
            margin-right: ${({ theme }) => theme.spacing.sm};

            svg{
                margin-right: ${({ theme }) => theme.spacing.xs}
            }
        }

        .success{
            color: ${({ theme }) => theme.colors.success_700};

            svg{
                color: ${({ theme }) => theme.colors.success_500}
            }
        }

        .failure{
            color: ${({ theme }) => theme.colors.error_700};

            svg{
                color: ${({ theme }) => theme.colors.error_500}
            }
        }
    }

    .card-footer > .chart-wrapper{
        img{
            cursor:pointer;
        }
    }

`

export const StyledCardList = styled.div`
    display: flex;
    flex-direction:column;
    gap:${({ theme }) => theme.spacing.xl};

    @media screen and (min-width:${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: row;
        justify-content: space-between;

        & > * {
            width:33%;
        }
       
    }

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
            margin-top: ${({ theme }) => theme.spacing.lg}
        }
    }
`