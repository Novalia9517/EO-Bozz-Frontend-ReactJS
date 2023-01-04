import React, { useState, useEffect } from 'react'
import Navbar from '../component/Navbar'
import TableTransaction from '../component/TableTransaction'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TransactionList = () => {

    const [order,setOrder] = useState()
    const navigate = useNavigate()

    const getOrder = async() => {
        await axios.get(`https://irisminty.my.id/clients/orders`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`}
        })
            .then(res => {
                const data = res.data.data
                setOrder(data)
                console.log('cek',data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onDetail = (id) => {
        navigate('/detail-transaction', {
            state: {
                id: id
            }
        })
    }

    useEffect(() => {
      getOrder()
    }, [])
    

    return (
        <div className='bg-white h-screen h-full'>
            <Navbar />
            <div className='container mx-auto px-10 py-10 text-black'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr >
                                    <th className='text-base'>Event Name</th>
                                    <th className='text-base'>Package Name</th>
                                <th className='text-base'>Event Date Start</th>
                                    <th className='text-base'>Event Date End</th>
                                    <th className='text-base'>Price</th>
                                    <th className='text-base'>Status</th>
                                    <th className='text-base'>Action</th>
                            </tr>
                        </thead>
                            {order? (
                                order.map((item) => {
                                    return (
                                        <TableTransaction
                                            eventName={item.EventName}
                                            serviceName={item.ServiceName}
                                            startDate={item.StartDate}
                                            endDate={item.EndDate}
                                            eventLocation={item.EventLocation}
                                            price={`Rp ${item.GrossAmmount}`}
                                            orderStatus={item.OrderStatus}
                                            onDetail={() => onDetail(item.ID)}
                                        />
                                    )
                                })
                            ):<></>}
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TransactionList