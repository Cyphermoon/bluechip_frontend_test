import React from 'react'
import { StyledLogo } from '../styles/StyledLogo'

const Logo = ({ title }) => {
  return (
    <StyledLogo>
      <img src="/assets/logo.svg" alt="Bluechip's logo" />
      {title && <h2>{title}</h2>}
    </StyledLogo>
  )
}

export default Logo