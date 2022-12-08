import styled from "styled-components";

export const StyledTransactionTable = styled.table`
    width:100%;
    border:1px solid ${({ theme }) => theme.colors.gray_200};
    border-radius:${({ theme }) => theme.radius.sm};
    padding:${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    text-align:left;

    th{
        font-size:${({ theme }) => theme.typeScale.text_xs};
        font-weight:500;
        color:${({ theme }) => theme.colors.gray_500};
    }

    td,th{
        padding:${({ theme }) => theme.spacing.xl} 0;
        border-bottom:1px solid ${({ theme }) => theme.colors.gray_200};
    }

    td:first-child{
        min-width:200px;
    }
`

export const StyledTableHeader = styled.thead`
    td{
        font-size:${({ theme }) => theme.typeScale.text_xs};
        color:${({ theme }) => theme.colors.gray_500};
        font-weight:500;
        display:inline-flex;
        align-items:center;

        svg{
            width:10px;
            height:10px;
        }
    }
`

export const StyledTableBody = styled.tbody``


export const StyledCompanyDescription = styled.div`
    display:inline-flex;
    align-items:center;
    
    p{
        font-size:${({ theme }) => theme.typeScale.text_sm};
        font-weight:500;
        color:${({ theme }) => theme.colors.gray_900};
    }

    small{
        font-size:${({ theme }) => theme.typeScale.text_sm};
        font-weight:400;
    }
`

export const StyledStatusTag = styled.div`
    display:inline-flex;
    align-items:center;
    font-size:${({ theme }) => theme.typeScale.text_xs};
    font-weight:500;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radius.sm};
    gap:${({ theme }) => theme.spacing.sm};
     

    svg{
        width:8px;
        height:8px;
    }

    &.processing{
        color: ${({ theme }) => theme.colors.gray_700};
        background-color ${({ theme }) => theme.colors.gray_100};

        svg{
            color: ${({ theme }) => theme.colors.gray_500}
        }
    }

    &.success{
        color: ${({ theme }) => theme.colors.success_700};
        background-color ${({ theme }) => theme.colors.success_50};

        svg{
            color: ${({ theme }) => theme.colors.success_500}
        }
    }


    &.declined{
        color: ${({ theme }) => theme.colors.error_700};
        background-color ${({ theme }) => theme.colors.error_50};

        svg{
            color: ${({ theme }) => theme.colors.error_500}
        }
    }
`

export const StyledExecutorProfile = styled.div`
    display:inline-flex;
    align-items:center;
    justify-content:space-between;
    font-size:${({ theme }) => theme.typeScale.text_sm};
    font-weight:500;
    min-width:275px;

    a{
        font-size:${({ theme }) => theme.typeScale.text_sm};
        font-weight:500;
        color:${({ theme }) => theme.colors.primary_700};
    }

    p{
      color:${({ theme }) => theme.colors.gray_900};
    }

    figure{
        width:32px;
        height:32px;
        margin-right:${({ theme }) => theme.spacing.md};

        img{
            width:100%;
            height:auto;
        }
    }
`

export const StyledProfile = styled.div`
    width:100%;
    height:100%;
    border-radius:50%;
    // padding:${({ theme }) => theme.spacing.md};
    background-color:${({ theme }) => theme.colors.primary_50};
    display:inline-flex;
    align-items:center;
    justify-content:center;

    span{
        font-size:${({ theme }) => theme.typeScale.text_sm};
        font-weight:500;
        color:${({ theme }) => theme.colors.primary_600};
    }
`