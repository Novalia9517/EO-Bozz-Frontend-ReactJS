import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { FaEdit } from 'react-icons/fa'
import Picprofile from '../assets/profile.png'

const ProfileUser = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className='flex'>
                <div className='w-[25%] h-full py-12 flex flex-col items-center'>
                    <div className='relative'>
                        <img src={Picprofile} className='rounded-full h-48 w-48 border border-bozz-one' />
                    </div>
                    <p className='text-xl text-bozz-one font-semibold text-center capitalize mt-3'></p>
                    <p className='text-sm text-bozz-one font-semibold text-center capitalize'></p>
                    <button className='underline text-bozz-one font-semibold ' >Edit Password</button>
                </div>
                <div className='py-10 lg:w-[500px]'>
                    <h1 className='text-4xl'>Profile</h1>
                    <div>
                        <div className='py-5 p-5'>
                            <div className='flex flex-col py-3'>
                                <label className=''>
                                    Name
                                </label>
                                <input type="text" disabled className="input input-bordered w-full" />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label>
                                    Email
                                </label>
                                <input type="text" disabled className="input input-bordered w-full" />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label>
                                    Phone
                                </label>
                                <input type="text" disabled className="input input-bordered w-full" />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label>
                                    Address
                                </label>
                                <input type="text" disabled className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-4xl'>Edit Profile</h1>
                        <div className='py-5'>

                            <div className='p-5 border rounded-md'>
                                <div className='flex flex-col py-3'>
                                    <label className=''>
                                        Name
                                    </label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                                <div className='flex flex-col py-3'>
                                    <label>
                                        Email
                                    </label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                                <div className='flex flex-col py-3'>
                                    <label>
                                        Phone
                                    </label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                                <div className='flex flex-col py-3'>
                                    <label>
                                        Address
                                    </label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileUser