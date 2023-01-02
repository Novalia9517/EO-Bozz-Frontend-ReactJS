import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import Row from '../components/Row'
import { formatCurrency } from '../utils/formatCurrency'

const OrderUser = () => {
    const location = useLocation()
    const startDate = location?.state?.startDate
    const endDate = location?.state?.endDate
    const navigate = useNavigate()

    const onPayment = () => {
        navigate('/payment', {
            state: {
                startDate: startDate,
                endDate : endDate
            }
        })
    }
    return (
        <div className='bg-bozz-six text-bozz-one'>
            <Navbar />
            <div className='container mx-auto px-10 py-10'>
                <h1 className='text-4xl text-center'>Your Order</h1>
                {/* <form> */}
                    <p className='underline text-bozz-one'>Fill the form for your order !</p>
                    <div className='grid grid-cols-2 lg:grid-cols-2'>
                        <div>
                            <div className='flex flex-col py-1'>
                                <label className='font-semibold'>
                                    Start Date
                                </label>
                                <p className='text-xl font-bold text-bozz-two'>{startDate}</p>
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className=''>
                                    Client Name
                                </label>
                                <input type="text" className="input border border-bozz-one bg-bozz-six w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-1'>
                                <label>
                                    Event Name
                                </label>
                                <input type="text" className="input border border-bozz-one  bg-bozz-six w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className=''>
                                    Note For EO
                                </label>
                                <textarea className="textarea border border-bozz-one h-24 resize-none bg-bozz-six w-full max-w-md" placeholder="Bio"></textarea>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col py-1'>
                                <label className='font-semibold'>
                                    End Date
                                </label>
                                <p className='text-xl font-bold text-bozz-two'>{endDate}</p>
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className=''>
                                    Event Location
                                </label>
                                <input type="text" className="input border border-bozz-one  bg-bozz-six w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className=''>
                                    Event Address
                                </label>
                                <input type="text" className="input border border-bozz-one  bg-bozz-six w-full max-w-md" />
                            </div>
                        </div>
                    </div>

                    <div className='py-10'>
                        <h1 className='text-3xl'>Service Detail</h1>
                        <div className='py-10 border rounded-md w-full border-bozz-one px-10'>
                            <div className='grid grid-cols-3 lg:grid-cols-3 px-2'>
                                <div>
                                    <p className='text-lg'>Service Name</p>
                                    <p className='text-lg'>Service Price</p>
                                    <p className='text-lg'>Additionals</p>
                                    <p className='text-md my-3'>1. Souvenir @100pcs</p>
                                    <p className='text-md my-3'>1. Souvenir @100pcs</p>
                                </div>
                                <div>
                                    <p className='font-extrabold'>:</p>
                                    <p className='font-extrabold'>:</p>
                                    <p className='font-extrabold'>:</p>
                                    <div className='my-3 flex'>
                                        <button className='h-8 w-5 flex justify-center items-center bg-bozz-six border border-bozz-one hover:bg-bozz-one hover:text-white'>-</button>
                                        <p className='text-lg px-2 border-b-2 border-bozz-one h-8 w-8 text-center'>1</p>
                                        <button className='h-8 w-5 flex justify-center items-center bg-bozz-six border border-bozz-one hover:bg-bozz-one hover:text-white'>+</button>
                                        <p className='text-md px-2'>x {formatCurrency(1200000)}</p>
                                    </div>
                                    <div className='my-3 flex'>
                                    <button className='h-8 w-5 flex justify-center items-center bg-bozz-six border border-bozz-one hover:bg-bozz-one hover:text-white'>-</button>
                                        <p className='text-lg px-2 border-b-2 border-bozz-one h-8 w-8 text-center'>1</p>
                                        <button className='h-8 w-5 flex justify-center items-center bg-bozz-six border border-bozz-one hover:bg-bozz-one hover:text-white'>+</button>
                                        <p className='text-md px-2'>x {formatCurrency(1200000)}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-lg font-bold'>Package Name</p>
                                    <p className='text-lg font-bold'>{formatCurrency(1200000)}</p>
                                    <p className='text-lg font-bold my-6'>{formatCurrency(1200000)}</p>
                                    <p className='text-lg font-bold my-6'>{formatCurrency(1200000)}</p>
                                </div>
                            </div>
                            <div className="divider bg-bozz-one h-0.5"></div> 
                            <div className='grid grid-cols-3 lg:grid-cols-3 my-5'>
                                <p className='text-lg font-bold ml-2'>TOTAL</p>
                                <p className='text-lg font-bold' >:</p>
                                <p className='text-lg font-bold'>{formatCurrency(15000000)}</p>
                            </div>
                        </div>
                            <div className='flex justify-end  mt-4'>
                                <button className='btn hover:btn-warning bg-orange-400 mx-2 text-white'>Cancel</button>
                                <button className='btn bg-bozz-one hover:bg-bozz-two text-white' onClick={() => onPayment()}>Order</button>
                            </div>
                    </div>
                {/* </form> */}
            </div>
            <Footer />
        </div>
    )
}

export default OrderUser