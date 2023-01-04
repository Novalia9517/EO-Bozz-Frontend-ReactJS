import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'

const TableTransaction = ({no, eventName, startDate, endDate, total, status, onDetail}) => {
    // <TableTransaction   
    //     no={i + 1} eventName={item.event_name} startDate={item.start_date}
    //     endDate={item.end_date} total={item.gross_amount} 
    //     onDetail={() => navigate('/detail-transaction', { state : {id : item.id}})}
    //     />
    return (
            <tr className='px-3 h-10 border-b '>
                <td>{no}</td>
                <td>{eventName.slice(0,15)}...</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{formatCurrency(total)}</td>
                <td>{status}</td>
                <td><button onClick={onDetail} className='cursor-pointer text-bozz-two hover:underline'>Detail</button></td>
            </tr>
    )
}

export default TableTransaction