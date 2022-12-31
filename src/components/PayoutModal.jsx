import React from 'react'
import { useState } from 'react'
import { formatCurrency } from '../utils/formatCurrency'

// onChangeSelect, comment, setComment, status_feedback, onSubmitFeedback 

const PayoutModal = ({change, payout, data}) => {
    
    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative py-10 px-16 h-auto bg-white text-bozz-one" htmlFor="">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-5 top-5 bg-bozz-three">✕</label>
                    <h3 className="text-2xl font-bold text-bozz-three text-center">Payment</h3>
                    <div className='grid gap-5 grid-cols-2 grid-rows-2 text-left mt-5'>
                        <div className=''>
                            <p className='text-xs text-bozz-two'>Partner Name</p>
                            <p className='text-md text-bozz-three'>Company A</p>
                        </div>
                        <div className=''>
                            <p className=' text-xs text-bozz-two'>Bank Name</p>
                            <p className='text-md text-bozz-three'>BCA</p>
                        </div>
                        <div className=''>
                            <p className=' text-xs text-bozz-two'>Bank Account</p>
                            <p className='text-md text-bozz-three'>29909984345</p>
                        </div>
                        <div className=''>
                            <p className=' text-xs text-bozz-two'>Total</p>
                            <p className='text-md text-bozz-three'>{formatCurrency(10000000)}</p>
                        </div>
                    </div>
                    <div className='mt-5 text-left'>
                        <p className=' text-xs text-bozz-two'>Slip Transaction</p>
                        <input type={'file'} className='bg-white text-sm h-8 w-full border border-bozz-three file:bg-bozz-three file:text-xs file:text-white file:border-none file:h-full placeholder:text-bozz-two' placeholder='Bukti Transfer' onChange={change}/>
                    </div>
                    <button className='w-full text-md bg-bozz-three text-white mt-8 rounded-md h-10' onClick={payout}>Confirm Payment</button>
                </label>
            </label>
        </>
    )
}

export default PayoutModal