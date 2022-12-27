import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const OrderUser = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto px-10 py-10'>
                <h1 className='text-4xl text-center'>Your Order</h1>
                <form>
                    <p className='underline text-bozz-one'>Fill the form for your order !</p>
                    <div className='grid grid-cols-2 lg:grid-cols-2'>
                        <div>
                            <div className='flex flex-col py-3'>
                                <label className=''>
                                    Client Name
                                </label>
                                <input type="text" className="input input-bordered w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label>
                                    Event Name
                                </label>
                                <input type="text" className="input input-bordered w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label>
                                    Start Date
                                </label>
                                <input type="text" className="input input-bordered w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label className=''>
                                    Note For EO
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col py-3'>
                                <label className=''>
                                    End Date
                                </label>
                                <input type="text" className="input input-bordered w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label className=''>
                                    Event Location
                                </label>
                                <input type="text" className="input input-bordered w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label className=''>
                                    Event Address
                                </label>
                                <input type="text" className="input input-bordered w-full max-w-md" />
                            </div>
                        </div>
                    </div>

                    <div className='py-10'>
                        <h1 className='text-4xl underline'>Service</h1>
                        <div className='py-5 border rounded-md'>
                            <div className='grid grid-cols-3 lg:grid-cols-3 px-2'>
                                <div>
                                    <p className='text-xl'>Service Name</p>
                                    <p className='text-xl'>Service Price</p>
                                    <p className='text-xl'>Additionals</p>
                                    <p className='text-md my-3'>1. Souvenir @100pcs</p>
                                    <p className='text-md my-3'>1. Souvenir @100pcs</p>
                                </div>
                                <div>
                                    <p className='font-extrabold'>:</p>
                                    <p className='font-extrabold'>:</p>
                                    <p className='font-extrabold'>:</p>
                                    <div className='my-3 flex'>
                                        <button className='btn'>-</button>
                                        <p className='text-lg px-2'>1</p>
                                        <button className='btn'>+</button>
                                        <p className='text-lg px-2'>x Rp.1.200.000</p>
                                    </div>
                                    <div className='my-3 flex'>
                                        <button className='btn'>-</button>
                                        <p className='text-lg px-2'>1</p>
                                        <button className='btn'>+</button>
                                        <p className='text-lg px-2'>x Rp.1.200.000</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xl'>Package Name</p>
                                    <p className='text-xl'>Rp. 12.000.000</p>
                                    <p className='text-xl my-6'>Rp. 1.200.000</p>
                                    <p className='text-xl my-6'>Rp. 1.200.000</p>
                                </div>
                            </div>
                            <hr className='w-[90%] ml-5' />
                            <div className='grid grid-cols-3 lg:grid-cols-3 my-5'>
                                <p className='text-lg font-bold ml-2'>TOTAL</p>
                                <p className='text-lg font-bold' >:</p>
                                <p className='text-lg font-bold'>Rp.15.000.000</p>
                            </div>
                            <div className='flex justify-center mt-'>
                                <button className='btn btn-warning mx-2 text-white'>Cancel</button>
                                <button className='btn'>Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default OrderUser