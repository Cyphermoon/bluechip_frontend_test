import styled from "styled-components";


export const StyledCheckBox = styled.input`
    border:1px solid ${({ theme }) => theme.colors.gray_200};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radius.sm}
    width:20px;
    height:20px;
`