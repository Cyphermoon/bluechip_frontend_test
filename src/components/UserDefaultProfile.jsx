import React from 'react'
import { StyledProfile } from '../styles/transactionTable'

const UserDefaultProfile = ({ name }) => {

    const getUserInitials = (name) => {
        let spaceIndex = name.indexOf(" ");

        return `${name.charAt(0)}${name.charAt(spaceIndex + 1)}`
    }

    return (
        <StyledProfile>
            <span>{getUserInitials(name)}</span>
        </StyledProfile>
    )
}

export default UserDefaultProfile