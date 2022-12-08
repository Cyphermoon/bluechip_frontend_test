import React from 'react'
import { BsArrowDown, BsArrowUp, BsThreeDotsVertical } from 'react-icons/bs'
import { StyledCard } from '../styles/dashboard.style'
import { Flex } from '../styles/util.style'

const Card = ({ card_title, value, percentage_changed, up }) => {
    return (
        <StyledCard >
            <Flex>
                <span>{card_title}</span>
                <BsThreeDotsVertical />
            </Flex>
            <h1>{value}</h1>

            <div className='card-footer'>
                <div className='info'>
                    <span className={`percentage-changed ${up ? "success" : "failure"}`}>
                        {up ? <BsArrowUp /> : <BsArrowDown />}
                        {percentage_changed}
                    </span>

                    <span className='changed-duration'>vs last <br /> month</span>
                </div>

                <div className='chart-wrapper'>
                    {up ? <img src='/assets/success-chart.svg' alt="Success chart" /> :
                        <img src='/assets/failure-chart.svg' alt="Failure Chart" />}
                </div>

            </div>
        </StyledCard>
    )
}

export default Card