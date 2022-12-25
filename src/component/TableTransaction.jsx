import React from 'react'

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
                <td><a className='cursor-pointer'>Detail</a></td>
            </tr>
        </tbody>
    )
}

export default TableTransaction