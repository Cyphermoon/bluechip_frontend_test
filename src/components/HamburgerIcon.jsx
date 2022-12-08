import { StyledIcon, StyledNavBottom, StyledNavMiddle, StyledNavTop } from "../styles/hamburger.style"

const HamburgerIcon = ({ toggleNavDisplay, isOpen, dimension }) => {
    return (
        <StyledIcon
            onClick={toggleNavDisplay}
            className={isOpen && "opened"}>
            <StyledNavTop />
            <StyledNavMiddle />
            <StyledNavBottom />
        </StyledIcon>
    )
}


export default HamburgerIcon