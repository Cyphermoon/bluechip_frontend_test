import styled from "styled-components";
import { CenterContainer } from "./container.style";

export const StyledMobileNavBar = styled.nav`
    
    ${CenterContainer}{
        display:flex;
        justify-content: space-between;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`