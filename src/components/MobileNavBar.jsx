import React from 'react'
import { CenterContainer } from '../styles/container.style'
import { StyledMobileNavBar } from '../styles/StyledMobileNavBar'
import HamburgerIcon from './HamburgerIcon'
import Logo from './Logo'

const MobileNavBar = () => {
    return (
        <StyledMobileNavBar>
            <CenterContainer>
                <Logo title="Untitled Ui" />
                <HamburgerIcon />
            </CenterContainer>
        </StyledMobileNavBar>
    )
}

export default MobileNavBar