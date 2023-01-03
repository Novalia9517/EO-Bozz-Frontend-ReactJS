import React from 'react'

const TableTransaction = ({ serviceName, eventName, startDate, endDate, eventLocation, price, orderStatus, onDetail }) => {
    return (
        <tbody>
            <tr>
                <td>{serviceName}</td>
                <td>{eventName}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{price}</td>
                <td>{orderStatus}</td>
                <td onClick={onDetail} className='cursor-pointer'>Detail</td>
            </tr>
        </tbody>
    )
}

export default TableTransaction