import React from 'react'
import { CenterContainer } from '../styles/container.style'
import { StyledMobileNavBar } from '../styles/StyledMobileNavBar'
import HamburgerIcon from './HamburgerIcon'
import Logo from './Logo'

const MobileNavBar = ({ navOpened, toggleNavOpened }) => {
    return (
        <StyledMobileNavBar>
            <CenterContainer>
                <Logo title="Untitled Ui" />
                <HamburgerIcon
                    navOpened={navOpened}
                    toggleNavOpened={toggleNavOpened} />
            </CenterContainer>
        </StyledMobileNavBar>
    )
}

export default MobileNavBar