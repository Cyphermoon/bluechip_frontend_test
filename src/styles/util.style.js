import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: ${({ align }) => !align ? "center" : align};
    justify-content: ${({ justify }) => !justify ? "space-between" : justify};
`