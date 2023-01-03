import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { formatCurrency } from '../utils/formatCurrency'


const DetailTransaction = () => {

    const [orderId,setOrderId] = useState()
    const location = useLocation()
    const id = location?.state.id
    console.log('id',id)

    const getOrderId = async () => {
        await axios.get(`https://irisminty.my.id/orders/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
        })
            .then(res => {
                const data = res.data.data
                console.log(data)
                setOrderId(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getOrderId()
    }, [])
    

  return (
    <div className='bg-bozz-six text-bozz-one'>
            <Navbar />
            <div className="flex justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
                    {orderId? (
                      <div className="lg:col-span-2">
                          <h3 className="text-2xl font-bold text-bozz-two">Selesaikan Pembayaran</h3>
                          <p className='text-bozz-three font-bold'>Status : {orderId.order_status}</p>
                          <div className='grid gap-5 grid-cols-2 grid-rows-2 text-left mt-5'>
                              <div className=''>
                                  <p className='text-xs text-bozz-two'>Start Date</p>
                                  <p className='text-md text-bozz-three'>{orderId.start_date}</p>
                              </div>
                              <div className=''>
                                  <p className='text-xs text-bozz-two'>End Date</p>
                                  <p className='text-md text-bozz-three'>{orderId.end_date}</p>
                              </div>
                              <div className=''>
                                  <p className='text-xs text-bozz-two'>Sercive Price</p>
                                  <p className='text-md text-bozz-three'>{orderId.service_price}</p>
                              </div>
                              <div className=''>
                                  <p className='text-xs text-bozz-two'>Client Email</p>
                                  <p className='text-md text-bozz-three'>{orderId.end_date}</p>
                              </div>
                              <div className=''>
                                  <p className='text-xs text-bozz-two'>Client Address</p>
                                  <p className='text-md text-bozz-three'>{orderId.event_address}</p>
                              </div>
                              <div className=''>
                                  <p className='text-xs text-bozz-two'>Notes for partner </p>
                                  <p className='text-md text-bozz-three'>{orderId.notes_for_partner}s</p>
                              </div>

                          </div>
                          <div className='mt-10 border border-bozz-two p-5 mr-8'>
                              <p className='text-xs text-bozz-two'>Bank Name</p>
                              <p className='text-md text-bozz-three font-semibold'>{orderId.payment_method}</p>
                              <p className='text-xs text-bozz-two'>No. Virtual Account</p>
                              <p className='text-md text-bozz-three font-semibold'>{orderId.payment_va_number}</p>
                          </div>
                      </div>
                    ): <></>}
                    
                    {/* <div>
                    <h2 className="text-sm font-semibold text-bozz-two">Your Order</h2>
                    <div className="bg-white rounded mt-4 w-96 shadow-lg py-6 border border-bozz-two px-8">
                        <div className="">
                            <div className="flex items-end border-b border-gray-400 py-3">
                                <span className="text-sm font-semibold">Service Name</span>
                                <span className="text-sm ml-auto">{formatCurrency(12000000)}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-end justify-between border-b border-gray-400 py-3">
                                <span className="text-sm font-semibold">Additional Name</span>
                                <span className="text-sm text-gray-500 mb-px">{formatCurrency(12000000)}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-end justify-between border-b border-gray-400 py-3">
                                <span className="text-sm font-semibold">Additional Name</span>
                                <span className="text-sm text-gray-500 mb-px">{formatCurrency(12000000)}</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-end justify-between border-b border-gray-400 py-3">
                                <span className="text-sm">Total</span>
                                <span className="text-sm  font-semibold text-gray-800 mb-px">{formatCurrency(12000000)}</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <button className='text-white '>List Transaction</button>
            </div>
        </div>
        </div>
  )
}

export default DetailTransaction