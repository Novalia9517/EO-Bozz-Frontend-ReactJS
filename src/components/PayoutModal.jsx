import React from 'react'
import { useState } from 'react'

// onChangeSelect, comment, setComment, status_feedback, onSubmitFeedback 

const PayoutModal = () => {

    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative py-10 px-16 h-auto bg-white text-bozz-one" htmlFor="">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-5 top-5 bg-bozz-three">✕</label>
                    <h3 className="text-2xl font-bold text-bozz-three text-center">Payment</h3>
                    <div className='flex justify-between'>
                        <div className='mt-3'>
                            <p className=' text-xs text-bozz-two'>Partner Name</p>
                            <p className='text-md text-bozz-three'>Company A</p>
                        </div>
                        <div className='mt-3 pr-10'>
                            <p className=' text-xs text-bozz-two'>Bank Name</p>
                            <p className='text-md text-bozz-three'>BCA</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className=' text-xs text-bozz-two'>Bank Account</p>
                        <p className='text-md text-bozz-three'>29909984345</p>
                    </div>
                    <div className='mt-3'>
                        <p className=' text-xs text-bozz-two'>Total</p>
                        <p className='text-md text-bozz-three'>10000000</p>
                    </div>
                    <div className='mt-3'>
                        <p className=' text-xs text-bozz-two'>Slip Transaction</p>
                        <input type={'file'} className='bg-white text-sm h-10 w-full border border-bozz-three file:bg-bozz-three file:text-white file:border-none file:h-full placeholder:text-bozz-two' placeholder='Bukti Transfer'/>
                    </div>
                    <button className='w-full text-md bg-bozz-three text-white mt-8 rounded-md h-10'>Confirm Payment</button>
                </label>
            </label>
        </>
    )
}

export default PayoutModal