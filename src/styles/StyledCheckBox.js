import styled from "styled-components";


export const StyledCheckBox = styled.input`
    border:1px solid ${({ theme }) => theme.colors.gray_200};
    border-radius: ${({ theme }) => theme.radius.sm};
    transform:scale(1.5);
    margin-right: ${({ theme }) => theme.spacing.lg};
`