import React from 'react'
import Navbar from '../component/Navbar'
import { formatCurrency } from '../utils/formatCurrency'

const DetailTransaction = () => {
  return (
    <div className='bg-bozz-six text-bozz-one'>
            <Navbar />
            <div className="flex justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-bozz-two">Selesaikan Pembayaran</h3>
                        <p className='text-bozz-three font-bold'>Status : Menunggu  Pembayaran</p>
                        <div className='grid gap-5 grid-cols-2 grid-rows-2 text-left mt-5'>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Start Date</p>
                                <p className='text-md text-bozz-three'>2023/02/03</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>End Date</p>
                                <p className='text-md text-bozz-three'>2023/02/03</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Client Name</p>
                                <p className='text-md text-bozz-three'>Client Name</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Client Email</p>
                                <p className='text-md text-bozz-three'>youremail@gmail.com</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Client Address</p>
                                <p className='text-md text-bozz-three'>Jln. Kunang kunang 223</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-bozz-two'>Notes for partner </p>
                                <p className='text-md text-bozz-three'>Kue nya pengen warna coklat aja yang kemarin kita bahas</p>
                            </div>
                            
                        </div>
                            <div className='mt-10 border border-bozz-two p-5 mr-8'>
                                <p className='text-xs text-bozz-two'>Bank Name</p>
                                <p className='text-md text-bozz-three font-semibold'>BCA</p>
                                <p className='text-xs text-bozz-two'>No. Virtual Account</p>
                                <p className='text-md text-bozz-three font-semibold'>80781278937837</p>
                            </div>
                        </div>
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