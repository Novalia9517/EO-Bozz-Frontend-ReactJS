import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'


const TableTransaction = ({no, serviceName, eventName, startDate, endDate, eventLocation, price, orderStatus, onDetail }) => {
    return (
            <tr className='px-3 h-10 border-b '>
                <td>{no}</td>
                <td>{serviceName.slice(0,20)}...</td>
                <td>{eventName.slice(0,20)}...</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{formatCurrency(price)}</td>
                <td>{orderStatus}</td>
                <td onClick={onDetail} className='cursor-pointer text-bozz-two hover:underline'>Detail</td>
            </tr>
    )
}

export default TableTransaction