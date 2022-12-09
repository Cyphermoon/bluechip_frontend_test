import React from 'react'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import { StyledCompanyDescription, StyledExecutorProfile, StyledStatusTag, StyledTableBody, StyledTableHeader, StyledTransactionTable } from '../styles/transactionTable'
import transaction_list from "../transaction_list.json"
import CheckBox from './CheckBox'
import { Flex } from '../styles/util.style'
import UserDefaultProfile from './UserDefaultProfile'
import { BiDownArrowAlt } from 'react-icons/bi'

const TransactionTable = () => {
    return (
        <StyledTransactionTable>
            <StyledTableHeader>
                <tr>
                    <th>
                        <Flex justify="flex-start">
                            <CheckBox />Trade
                        </Flex>
                    </th>
                    <th>Order Amount</th>
                    <th>
                        <Flex justify="flex-start">
                            Delivery date <BiDownArrowAlt />
                        </Flex>
                    </th>
                    <th>Status</th>
                    <th>Executed By</th>
                </tr>
            </StyledTableHeader>

            <StyledTableBody>
                {transaction_list.map((transaction, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                <CompanyDescription
                                    name={transaction.trade.name}
                                    desc={transaction.trade.desc} />
                            </td>
                            <td>
                                {transaction.order_amount}
                            </td>
                            <td>
                                {transaction.delivery_date}
                            </td>
                            <td>
                                <StatusTag status={transaction.status} />
                            </td>
                            <td>
                                <ExecutorProfile
                                    image_url={transaction.executor.image_url}
                                    name={transaction.executor.name}
                                    email={transaction.executor.email} />
                            </td>
                        </tr>
                    )
                })}
            </StyledTableBody>
        </StyledTransactionTable>
    )
}


const CompanyDescription = ({ name, desc }) => {
    return (
        <StyledCompanyDescription>
            <CheckBox />
            <div>
                <p>{name}</p>
                <small>{desc}</small>
            </div>
        </StyledCompanyDescription>
    )
}


const StatusTag = ({ status }) => {

    const returnAppropriateClass = (status) => {
        if (status.toLowerCase() === "processing") return "processing"
        if (status.toLowerCase() === "success") return "success"
        if (status.toLowerCase() === "declined") return "declined"
    }

    return (
        <StyledStatusTag className={`${returnAppropriateClass(status)}`}>
            <VscCircleLargeFilled />
            {status}
        </StyledStatusTag>
    )
}


const ExecutorProfile = ({ image_url, name, email }) => {
    return (
        <StyledExecutorProfile>
            <Flex align="center" justify="flex-start">
                <figure>
                    {image_url && <img src={image_url} alt="user profile" />}
                    {!image_url && <UserDefaultProfile name={name} />}
                </figure>
                <div>
                    <p>{name}</p>
                    <small>{email}</small>
                </div>
            </Flex>
            <a href="/" >View</a>
        </StyledExecutorProfile>

    )
}

export default TransactionTable