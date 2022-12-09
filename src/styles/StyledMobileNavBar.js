import styled from "styled-components";
import { CenterContainer } from "./container.style";

export const StyledMobileNavBar = styled.nav`
    box-shadow:0px 1px 2px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    ${CenterContainer}{
        display:flex;
        justify-content: space-between;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`