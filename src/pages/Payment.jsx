import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { formatCurrency } from '../utils/formatCurrency'

const Payment = () => {
    const banks = ['bni', 'mandiri', 'cimb', 'bca', 'bri', 'maybank', 'permata', 'mega']
    const [chosen, setChosen] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    const startDate = location?.state?.startDate
    const endDate = location?.state?.endDate
    const clientName = location?.state?.clientName
    const eventName = location?.state?.eventName
    const eventLocation = location?.state?.eventLocation
    const eventAddress = location?.state?.eventAddress
    const note = location?.state?.note
    
    console.log('ab', clientName)
    

    const onPay = () => {
        navigate('/detail-transaction')
    }
    console.log(chosen)
    return (
        <div className='bg-bozz-six text-bozz-one'>
            <Navbar />
            <div className="flex justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-bozz-three text-center">Payment</h3>
                        <div className='grid gap-5 grid-cols-2 grid-rows-2 text-left mt-5'>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Start Date</p>
                                <p className='text-md text-bozz-three'>{startDate}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>End Date</p>
                                <p className='text-md text-bozz-three'>{endDate}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Client Name</p>
                                <p className='text-md text-bozz-three'>{clientName}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Event Name</p>
                                <p className='text-md text-bozz-three'>{eventName}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Event Location</p>
                                <p className='text-md text-bozz-three'>{eventLocation}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Client Address</p>
                                <p className='text-md text-bozz-three'>{eventAddress}</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Notes for partner </p>
                                <p className='text-md text-bozz-three'>{note}</p>
                            </div>
                            
                        </div>
                        {/* <h2 className="text-sm font-medium">Payment Method</h2>
                        <div className="bg-white rounded mt-4 shadow-lg px-8">
                            <div className="flex items-center px-8 py-5">
                                <input className="checkbox" type="checkbox" />
                                <label className="text-sm font-medium ml-4">BCA</label>
                            </div>
                            <div className="border-t">
                                <div className="flex items-center px-8 py-5">
                                    <input className="checkbox" type="checkbox" />
                                    <label className="text-sm font-medium ml-4">BNI</label>
                                </div>
                                <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                                    <div className="col-span-2">
                                        <label className="text-xs font-semibold" for="cardNumber">Card number</label>
                                        <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div className="">
                                        <label className="text-xs font-semibold" for="cardNumber">Expiry Date</label>
                                        <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="MM/YY" />
                                    </div>
                                    <div className="">
                                        <label className="text-xs font-semibold" for="cardNumber">CVC/CVV</label>
                                        <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..." />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div>
                    {/* <h2 className="text-sm font-medium">Purchase Summary</h2> */}
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
                        {/* <div className='divider'></div> */}
                        <div className="mt-3">
                            <div className="flex items-end justify-between border-b border-gray-400 py-3">
                                <span className="text-sm">Total</span>
                                <span className="text-sm  font-semibold text-gray-800 mb-px">{formatCurrency(12000000)}</span>
                            </div>
                        </div>
                        {/* <div className="flex items-center px-8 mt-8">
                            <input id="termsConditions" type="checkbox" />
                            <label className="text-xs text-gray-500 ml-2" for="termsConditions">I agree to the terms and conditions.</label>
                        </div> */}
                        {/* <div className="flex flex-col px-8 pt-4">
                            <button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">Start Subscription</button>
                            <button className="text-xs text-blue-500 mt-3 underline">Have a coupon code?</button>
                        </div> */}
                         <div className="mt-4">
                            <div className="flex flex-col justify-between">
                                <span className="text-md font-semibold text-bozz-three">Pilih Metode Pembayaran</span>
                                <select 
                                className="bg-white px-3 border border-bozz-two text-md text-bozz-two h-10 rounded-lg w-full capitalize"
                                id='companycity'  onChange={(e) => setChosen(e.target.value)}
                                >
                                {banks.map((bank, i) => {
                                    return <option className='capitalize'>{bank} Bank</option>
                                })}
                                </select>
                                {chosen && <span className='text-xs font-semibold mt-1 text-bozz-two'>You Choose {chosen} for payment method</span>}
                            </div>
                        </div>
                        <button className='w-full h-10 bg-bozz-two mt-5 text-white font-semibold rounded-lg' onClick={onPay}>Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Payment