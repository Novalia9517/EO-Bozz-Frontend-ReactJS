import React from 'react'
import { Link } from 'react-router-dom'

const TableTransaction = () => {
    return (
        <tbody>
            <tr>
                <th>1</th>
                <td>Purchase Date</td>
                <td>Package Name</td>
                <td>Event Date Start</td>
                <td>Status</td>
                <td>Action</td>
                <td><Link to="/orderdetail" className='cursor-pointer'>Detail</Link></td>
            </tr>
        </tbody>
    )
}

export default TableTransaction