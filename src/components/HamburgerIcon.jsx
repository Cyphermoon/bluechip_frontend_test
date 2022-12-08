import { StyledIcon, StyledNavBottom, StyledNavMiddle, StyledNavTop } from "../styles/hamburger.style"

const HamburgerIcon = ({ toggleNavOpened, navOpened }) => {
    return (
        <StyledIcon
            onClick={toggleNavOpened}
            className={navOpened && "opened"}>
            <StyledNavTop />
            <StyledNavMiddle />
            <StyledNavBottom />
        </StyledIcon>
    )
}


export default HamburgerIcon