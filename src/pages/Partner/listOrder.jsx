import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/LayoutAdmin'
import Loading from '../../components/Loading'
import { apiWithAuth } from '../../services/api'
import { formatCurrency } from '../../utils/formatCurrency'

const ListOrder = () => {
    const tableHead = ['no', 'event name', 'service name', 'city', 'total order', 'start date', 'end date', 'status', 'action', 'transfer file']
    const [orderList, setOrderList] = useState()
    const navigate = useNavigate()

    const getOrderList = async() => {

        apiWithAuth(`partners/orders`, `GET`, null, "application/json", localStorage.getItem('userToken'))
        .then(res => setOrderList(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getOrderList()
    },[])
    console.log(orderList)
  return (
    <>
    {orderList ? 
    <LayoutAdmin>
        <div className='mt-3 w-full h-full'>
          <h1 className='text-xl font-bold text-bozz-one mb-5'>List Order Partner</h1>
          <div className='px-6 py-3 bg-white rounded-lg'>
            <table className='w-full table-fixed'>
              <thead className='border-b-2 border-bozz-three'>
                <tr>
                  {tableHead.map((title,index) => {
                    return <th className='text-bozz-two font-semibold capitalize text-md' key={index}>{title}</th>
                  })}
                </tr>
              </thead>
              <tbody>
                {orderList ? 
                    orderList.map((data, index) => {
                  return (
                    <tr className='text-bozz-two border-b-2 border-bozz-three h-6 text-center text-xs capitalize' key={index}>
                      <td>{index + 1}</td>
                      <td>{data.event_name}</td>
                      <td>{data.service_name.slice(0,10)}...</td>
                      <td>{data.event_location}</td>
                      <td>{formatCurrency(data.gross_ammount)}</td>
                      <td>{data.start_date.slice(0,10)}</td>
                      <td>{data.end_date.slice(0,10)}</td>
                      <td>{data.order_status}</td>
                      <td>{data.order_status === 'Waiting Confirmation' ? 
                        <button className='w-16 h-6 bg-bozz-three text-bozz-six rounded-lg text-[10px]'
                        onClick={() => navigate('/partner/confirm-order', {state : { id : data.id}})}
                        >Confirm</button> : '-'}</td>
                      {/* <td>{data.payout_status}</td> */}
                      {/* <td>{data.transfer_file && data.payout_status === 'pay' ?  */}
                      <td>{data.payout_receipt_url !== '' && data.order_status == 'Complete Order'? 
                        <button className='w-20 h-6 bg-bozz-three text-bozz-six rounded-lg text-[8px]'
                        src={data.payout_receipt_url}
                        >Download File</button> : '-'}</td>
                    </tr>
                  )
                })
                : <p className='text-lg font-semibold text-bozz-one mt-10'>Belum Ada Order Yang Masuk</p>
            }
              </tbody>
            </table>

          </div>
        </div>
    </LayoutAdmin>
    : <Loading/>
  }
    </>
  )
}

export default ListOrder