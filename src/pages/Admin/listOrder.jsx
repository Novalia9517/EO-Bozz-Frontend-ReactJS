import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import PayoutModal from '../../components/PayoutModal'
import { apiWithAuth } from '../../services/api'
import { formatCurrency } from '../../utils/formatCurrency'

const ListOrderAdmin = () => {
     // company name, clent name,start date, end date, gross ammount, status, paaction(pay)
    const tableHead = ['no', 'event name', 'event location', 'service name', 'start date', 'end date', 'total', 'status', 'action']
    const [orderList, setOrderList] = useState()
    const [img, setImg] = useState()
    const token = localStorage.getItem('userToken')

    const getOrderList = async() => {
        apiWithAuth(`orders`, `GET`, null, "application/json", token)
        .then(res => setOrderList(res.data))
        .catch(console.log(err))
    }

    const onPayout = async(id) => {
      const data = new FormData()
      data.append('payout_receipt_file', img)
      console.log([...data])

      apiWithAuth(`orders/${parseInt(id)}/payout`, `PUT`, data, "multipart/form-data", token)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
    }


    useEffect(() => {
        getOrderList()
    },[])
  return (
    <>
    {orderList && 
    <LayoutAdmin>
        <div className='mt-3 w-full h-full'>
          <h1 className='text-xl font-bold text-bozz-one mb-5'>List Order</h1>
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
                    <tr className='text-bozz-two border-b-2 border-bozz-three h-6 text-center text-xs font-semibold' key={index}>
                      <td>{index + 1}</td>
                      <td>{data.event_name}</td>
                      <td>{data.event_location}</td>
                      <td>{data.service_name.slice(0,15)}...</td>
                      <td>{data.start_date.slice(0,10)}</td>
                      <td>{data.end_date.slice(0,10)}</td>
                      <td>{formatCurrency(data.gross_ammount)}</td>
                      <td>{data.order_status}</td>
                      <td>{data.order_status === 'Complete Order' ? <label htmlFor="my-modal-4" className='btn btn-xs border border-white w-16 h-6 bg-bozz-three hover:bg-bozz-two text-bozz-six rounded-lg text-[10px]'>Pay</label> : '-'}</td>
                      <PayoutModal change={(e) => setImg(e.target.files[0])} payout={() => onPayout(data.id)} partner={data.partner} total={data.gross_ammount}/>
                    </tr>
                  )
                })
                : <tr className='text-lg font-semibold text-bozz-one mt-10'>Belum Ada Order Yang Masuk</tr>
            }
              </tbody>
            </table>

          </div>
        </div>
        {/* <PayoutModal/> */}
    </LayoutAdmin>
    
  }
    </>
  )
}

export default ListOrderAdmin