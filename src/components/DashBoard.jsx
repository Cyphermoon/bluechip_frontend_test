import React from 'react'
import { Button } from '../styles/button.style'
import { StyledDashBoard, StyledHeader } from '../styles/dashboard.style'

//icons
import { FiUploadCloud } from 'react-icons/fi'
import { RiAddFill } from 'react-icons/ri'
import { theme } from '../styles/index.style'
import { CenterContainer } from '../styles/container.style'

const DashBoard = () => {
    return (
        <StyledDashBoard>
            <CenterContainer>
                <StyledHeader>
                    <div>
                        <h2>Welcome back, Tofunmi</h2>
                        <p>Track, manage and forecast your customers and orders.</p>
                    </div>

                    <div className='button-space'>
                        <Button outline={true}>
                            <FiUploadCloud />
                            Import
                        </Button>
                        <Button bg={theme.colors.primary_600} color={theme.colors.white}>
                            <RiAddFill />
                            Add
                        </Button>
                    </div>

                </StyledHeader>
            </CenterContainer>
        </StyledDashBoard>
    )
}

export default DashBoard