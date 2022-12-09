import React from 'react'

import { StyledFilter, StyledFilterOption, StyledFilterOptions, StyledPageNumbers, StyledSearchBar, StyledTransaction, StyledTransactionFooter } from '../styles/transaction.style'

//icons
import { BiCalendar, BiLeftArrowAlt, BiRightArrowAlt, BiSearch } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'
import TransactionTable from './TransactionTable'
import { Button } from '../styles/button.style'


const TransactionSection = () => {
    return (
        <StyledTransaction>
            <StyledFilter>
                <StyledSearchBar>
                    <BiSearch />
                    <input type="text" placeholder='Search for trades' />
                </StyledSearchBar>

                <StyledFilterOptions>
                    <StyledFilterOption>
                        <BiCalendar />
                        <span>Jan 6, 2022 – Jan 13, 2022</span>
                    </StyledFilterOption>

                    <StyledFilterOption collapse={true}>
                        <BsFilter />
                        <span>Filter</span>
                    </StyledFilterOption>
                </StyledFilterOptions>
            </StyledFilter>

            <div className='table-container'>
                <TransactionTable />
            </div>

            <StyledTransactionFooter>
                <Button outline={true} collapse={true}>
                    <BiLeftArrowAlt />
                    <span>Prev</span>
                </Button>

                <div className='pagination-wrapper'>
                    <StyledPageNumbers>
                        <span className='active'>1</span>
                        <span >2</span>
                        <span >3</span>
                        <span >...</span>
                        <span >8</span>
                        <span >9</span>
                        <span >10</span>
                    </StyledPageNumbers>
                    <p>Page 1 of 10</p>
                </div>

                <Button outline={true} collapse={true}>
                    <span>Next</span>
                    <BiRightArrowAlt />
                </Button>
            </StyledTransactionFooter>
        </StyledTransaction>
    )
}

export default TransactionSection