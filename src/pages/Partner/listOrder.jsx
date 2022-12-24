import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/LayoutAdmin'
import { formatCurrency } from '../../utils/formatCurrency'

const ListOrder = () => {
    const tableHead = ['no', 'event name', 'service name', 'city', 'total order', 'start date', 'end date', 'status', 'action', 'payout status', 'transfer file']
    const [orderList, setOrderList] = useState()
    const navigate = useNavigate()

    const getOrderList = () => {
        const orders = [
            {
                event_name : 'Birthday Pak Garuda',
                service_name : 'Birthday',
                event_location : 'Jakarta',
                gross_amount : 36000000,
                start_date : '23/12/2022',
                end_date : '25/12/2022',
                status : 'not confirm',
                payout_status : 'pay',
                transfer_file : 'https://linkdownload',
            },
            {
                event_name : 'Wedding John Doe',
                service_name : 'Birthday',
                event_location : 'Jakarta',
                gross_amount : 32000000,
                start_date : '30/12/2022',
                end_date : '01/01/2023',
                status : 'not confirm',
                payout_status : 'Holded',
                transfer_file : 'https://linkdownload',
            },
            {
                event_name : 'Graduation Party',
                service_name : 'Prvate Party',
                event_location : 'Bali',
                gross_amount : 42000000,
                start_date : '27/12/2022',
                end_date : '29/12/2022',
                status : 'on going',
                payout_status : 'Holded',
                transfer_file : 'https://linkdownload',
            },
        ]
        setOrderList(orders)
    }

    useEffect(() => {
        getOrderList()
    },[])
  return (
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
                    <tr className='text-bozz-two border-b-2 border-bozz-three h-6 text-center text-xs font-semibold'>
                      <td>{index + 1}</td>
                      <td>{data.event_name}</td>
                      <td>{data.service_name}</td>
                      <td>{data.event_location}</td>
                      <td>{formatCurrency(data.gross_amount)}</td>
                      <td>{data.start_date}</td>
                      <td>{data.end_date}</td>
                      <td>{data.status}</td>
                      <td>{data.status === 'not confirm' ? 
                        <button className='w-16 h-6 bg-bozz-three text-bozz-six rounded-lg text-[10px]'
                        onClick={() => navigate('/partner/confirm-order')}
                        >Confirm</button> : '-'}</td>
                      <td>{data.payout_status}</td>
                      <td>{data.transfer_file && data.payout_status === 'pay' ? 
                        <button className='w-20 h-6 bg-bozz-three text-bozz-six rounded-lg text-[8px]'
                        src={data.transfer_file}
                        >Download File</button> : ''}</td>
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
  )
}

export default ListOrder