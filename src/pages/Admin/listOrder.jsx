import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import PayoutModal from '../../components/PayoutModal'

const ListOrderAdmin = () => {
     // company name, clent name,start date, end date, gross ammount, status, paaction(pay)
    const tableHead = ['no', 'company name', 'client name', 'start date', 'end date', 'total', 'status', 'action']
    const [orderList, setOrderList] = useState()
    const [revisi, setRevisi] = useState()
    const [revisiNote, setRevisiNote] = useState()

    const getOrderList = () => {
        const orders = [
            {
                company_name : 'Birthday Pak Garuda',
                client_name : 'Birthday',
                start_date : '23/12/2022',
                end_date : '25/12/2022',
                gross_amount : 36000000,
                status : 'waiting for payout'
            },
            {
                company_name : 'Wedding John Doe',
                client_name : 'Birthday',
                start_date : '30/12/2022',
                end_date : '01/01/2023',
                gross_amount : 32000000,
                status : 'waiting for payout'
            },
            {
                company_name : 'Graduation Party',
                client_name : 'Prvate Party',
                start_date : '27/12/2022',
                end_date : '29/12/2022',
                gross_amount : 42000000,
                status : 'on going'
            },
        ]
        setOrderList(orders)
    }

    const onSubmitRevisi = (e) => {
      console.log('revisi')
      e.preventDefault()
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
                {tableHead.map((title,index) => {
                  return <th className='text-bozz-two font-semibold capitalize text-md' key={index}>{title}</th>
                })}
              </thead>
              <tbody>
                {orderList ? 
                    orderList.map((data, index) => {
                  return (
                    <tr className='text-bozz-two border-b-2 border-bozz-three h-6 text-center text-xs font-semibold' key={index}>
                      <td>{index + 1}</td>
                      <td>{data.company_name}</td>
                      <td>{data.client_name}</td>
                      <td>{data.gross_amount}</td>
                      <td>{data.start_date}</td>
                      <td>{data.end_date}</td>
                      <td>{data.status}</td>
                      <td>{data.status === 'waiting for payout' ? <label htmlFor="my-modal-4" className='btn btn-xs border border-white w-16 h-6 bg-bozz-three hover:bg-bozz-two text-bozz-six rounded-lg text-[10px]'>Pay</label> : '-'}</td>
                    </tr>
                  )
                })
                : <p className='text-lg font-semibold text-bozz-one mt-10'>Belum Ada Order Yang Masuk</p>
            }
              </tbody>
            </table>

          </div>
        </div>
        <PayoutModal
                // onSubmitFeedback={(e) => onSubmitRevisi(e)}
                // comment={comment}
                // setRevisi={(e) => setRevisi(e.target.value)}
                // onChangeSelect={(e) => setStatus(e.target.value)}
            />
    </LayoutAdmin>
  )
}

export default ListOrderAdmin