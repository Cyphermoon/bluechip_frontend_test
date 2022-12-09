import React from 'react'
import { StyledCardList } from '../styles/dashboard.style'
import Card from './Card'


const CardList = () => {
    return (
        <StyledCardList>
            <Card card_title="Total Customers" value="2,420" percentage_changed="40%" up={true} />
            <Card card_title="Members" value="1,210" percentage_changed="10%" up={false} />
            <Card card_title="Active now" value="316" percentage_changed="20%" up={true} />
        </StyledCardList>
    )
}

export default CardList