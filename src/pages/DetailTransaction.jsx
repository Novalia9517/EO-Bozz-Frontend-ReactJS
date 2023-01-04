import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { formatCurrency } from '../utils/formatCurrency'
import { useLocation, useNavigate } from 'react-router-dom'
import { apiWithAuth } from '../services/api'
import Loading from '../components/Loading'
import Swal from 'sweetalert2'
import { BiArrowBack} from 'react-icons/bi'


const DetailTransaction = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const id = location?.state?.id
    // const id = 41
    const token = localStorage.getItem('userToken')
    const [orderDetail, setOrderDetail] = useState()
    const [review, setReview] = useState(false)
    const [total, setTotal] = useState(0)
    const [status, setStatus] = useState()
    const [rating, setRating] = useState()
    const [feedback, setFeedback] = useState()

    const getOrderDetail = async() => {
        apiWithAuth(`orders/${parseInt(id)}`, `GET`, null, "application/json", token)
        .then(res => {
            setOrderDetail(res.data)
            let jumlah = res.data.service_price
            res.data.detail_orders.map(item => {
                jumlah += item.detail_order_total
            })
            setTotal(jumlah)
            setStatus(res.data.order_status)
            // setStatus("Order Confirmed")
        })
        .catch(err => console.log(err))
    }

    const completeOrder = () => {
        console.log('complete order')
        setStatus("Complete Order")
    }
    const onSubmitReview = () => {
        const body = {
            review : feedback,
            rating : parseInt(rating),
            order_id : parseInt(id),
            service_id : parseInt(orderDetail.service_id)
        }

        console.log(body)
        apiWithAuth(`reviews`, `POST`, body, "application/json", token)
        .then(res => {
            Swal.fire({
                position : "center",
                icon : "success",
                title : `Success Send Review`,
                showConfirmButton : true
            })  
            console.log(err)
        })
        .catch(err => {
            Swal.fire({
                position : "center",
                icon : "error",
                title : `Failed Send Review`,
                showConfirmButton : true
            })  
        })
    }

    useEffect(() => {
        getOrderDetail()
    },[])

    console.log(total)
  return (
    <>
    {orderDetail ? 
    
    <div className='bg-bozz-six text-bozz-one'>
            <Navbar />
            <div className="flex justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
                    <div className="lg:col-span-2">
                        <div 
                            className='flex items-center text-bozz-one font-semibold gap-2 mb-5 cursor-pointer' 
                            onClick={() => navigate('/transaction')}
                            ><BiArrowBack/>List Transaction</div>
                        {status ==  "Waiting For Payment" ?
                            <h3 className="text-2xl font-bold text-bozz-two">Selesaikan Pembayaran</h3>
                            : null
                        }
                        <p className='text-bozz-three font-bold'>Status : {status}</p>
                        <div className='grid gap-5 grid-cols-2 grid-rows-2 text-left mt-5'>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Start Date</p>
                                <p className='text-md text-bozz-three'>{orderDetail.start_date}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>End Date</p>
                                <p className='text-md text-bozz-three'>{orderDetail.end_date}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Event Name</p>
                                <p className='text-md text-bozz-three'>{orderDetail.event_name}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Event Location</p>
                                <p className='text-md text-bozz-three'>{orderDetail.event_location}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Client Address</p>
                                <p className='text-md text-bozz-three'>{orderDetail.event_address}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Notes for partner </p>
                                <p className='text-md text-bozz-three'>{orderDetail.notes_for_partner}</p>
                            </div>
                            
                        </div>
                           {status ==  "Waiting For Payment" ?
                            <div className='mt-10 border border-bozz-two p-5 mr-8'>
                                    <p className='text-xs text-bozz-two'>Payment Method</p>
                                    <p className='text-md text-bozz-three font-semibold'>Virtual Account <span className='uppercase'>{orderDetail.payment_method.slice(3)}</span></p>
                                    <p className='text-xs text-bozz-two'>No. Virtual Account</p>
                                    <p className='text-md text-bozz-three font-semibold'>{orderDetail.payment_va_number}</p>
                                    <p className='text-xs text-bozz-two'>Expired Time</p>
                                    <p className='text-md text-bozz-three font-semibold'>{orderDetail.payment_expired_time}</p>
                                </div>
                            : <div className='mt-10 border border-bozz-two p-5 mr-8'>
                                <p className='text-bozz-three font-bold'>Event Ongoing</p>
                                </div>
                           }

                           {status ==  "Order Confirmed" ?
                                <button className='h-8 mt-5 px-5 rounded-lg bg-bozz-two hover:bbg-bozz-three text-white font-semibold text-xs' onClick={() => completeOrder()}>Complete Order</button>
                                : null
                            }
                           {status ==  "Complete Order" ?
                                <button className='h-8 px-5 mt-5 rounded-lg bg-bozz-two hover:bbg-bozz-three text-white font-semibold text-xs' onClick={() => setReview(!review)}>Add Review</button>
                                : null
                            }
                            {review && status ==  "Complete Order" ?
                                <div className='p-5 border border-bozz-two mt-5 mr-8'>
                                    <div className='flex flex-col my-3'>
                                        <label className='text-xs font-semi-bold text-bozz-three'>Rating</label>
                                        <input type={'number'} className='border border-bozz-two focus:ring-2 focus:ring-bozz-two h-10 w-full max-w-md bg-white px-3 text-bozz-two focus:outline-none'  placeholder='1-5' min='1' max='5'
                                        onChange={(e) => setRating(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-col my-3'>
                                        <label className='text-xs font-semi-bold text-bozz-three'>Review</label>
                                        <textarea type={'text'} className='border border-bozz-two focus:outline-none focus:ring-2 focus:ring-bozz-two h-24 resize-none w-full max-w-md bg-white p-3 text-bozz-two' placeholder='Type your review...'
                                        onChange={(e) => setFeedback(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex justify-center'>
                                        <button 
                                            className='h-10 px-5 bg-bozz-two text-white rounded-md text-xs'
                                            onClick={onSubmitReview}
                                        >Submit Review</button>
                                    </div>
                                </div>
                             : null
                            }
                        </div>
                    <div>
                    <h2 className="text-sm font-semibold text-bozz-two">Your Order</h2>
                    <div className="bg-white rounded mt-4 w-96 shadow-lg py-6 border border-bozz-two px-8">
                    <div className="">
                            <div className="flex items-end border-b border-gray-400 py-3">
                                <span className="text-sm font-semibold">{orderDetail.service_name}</span>
                                <span className="text-sm ml-auto">{formatCurrency(orderDetail.service_price)}</span>
                            </div>
                        </div>
                        {orderDetail?.detail_orders?.map((item, i) =>{
                            if(item.qty > 0){
                                return (
                                    <div className="mt-4" key={i}>
                                        <div className="flex items-end justify-between border-b border-gray-400 py-3">
                                            <span className="text-sm font-semibold">{item.additional_name}</span>
                                            <span className="text-sm text-gray-500 mb-px">{formatCurrency(item.detail_order_total)}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })

                        }
                         <div className="mt-3">
                            <div className="flex items-end justify-between border-b border-gray-400 py-3">
                                <span className="text-sm">Total</span>
                                <span className="text-sm  font-semibold text-gray-800 mb-px">{formatCurrency(total)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='text-white '>List Transaction</button>
            </div>
        </div>
        </div>
        : <Loading/>
    }
    </>
  )
}

export default DetailTransaction