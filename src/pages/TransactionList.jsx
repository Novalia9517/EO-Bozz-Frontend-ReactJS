import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'
import TableTransaction from '../component/TableTransaction'
import { apiWithAuth } from '../services/api'

const TransactionList = () => {
    const id = localStorage.getItem('idclient')
    const token = localStorage.getItem('userToken')
    const navigate = useNavigate()
    const [transactionList, setTransactionList] = useState()
    const getTransactionList = () => {
        apiWithAuth(`orders`, `GET`, null, "application/json", token)
        .then(res => {
            setTransactionList(res.data.filter(item => item.client_id == id))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getTransactionList()
    },[])
    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='container mx-auto px-10 py-10 text-black bg-white'>
                <div className="overflow-x-auto border border-bozz-one rounded p-5 shadow-lg text-gray.700">
                    <table className=" w-full bg-white ">
                        <thead>
                            <tr className='text-left px-3 border-b border-bozz-one'>
                                <th>No</th>
                                <th>Event Name</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Total Transaction</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {transactionList && transactionList.length >= 1 ? 
                                transactionList?.map((item, i) => {
                                    return <TableTransaction   
                                            no={i + 1} eventName={item.event_name} startDate={item.start_date}
                                            endDate={item.end_date} total={item.gross_ammount} status={item.order_status}
                                            onDetail={() => navigate('/detail-transaction', { state : {id : item.id}})}
                                            />
                                })
                            : <p> Anda belum memiliki transaksi</p>
                            }

                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TransactionList