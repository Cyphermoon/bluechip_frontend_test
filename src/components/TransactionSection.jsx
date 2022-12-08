import React from 'react'

import { StyledFilter, StyledFilterOption, StyledSearchBar, StyledTransaction } from '../styles/transaction.style'

//icons
import { BiCalendar, BiSearch } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'


const TransactionSection = () => {
    return (
        <StyledTransaction>
            <StyledFilter>
                <StyledSearchBar>
                    <BiSearch />
                    <input type="text" placeholder='Search for trades' />
                </StyledSearchBar>

                <div className='filter-options'>
                    <StyledFilterOption>
                        <BiCalendar />
                        <span>Jan 6, 2022 – Jan 13, 2022</span>
                    </StyledFilterOption>

                    <StyledFilterOption collapse={true}>
                        <BsFilter />
                        <span>Filter</span>
                    </StyledFilterOption>
                </div>
            </StyledFilter>
        </StyledTransaction>
    )
}

export default TransactionSection