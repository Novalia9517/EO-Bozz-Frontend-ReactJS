import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { FaEdit } from 'react-icons/fa'
import Picprofile from '../assets/profile.png'
import Dummy from '../assets/HomeImage.png'
import CardProduct from '../component/CardProduct'

const ProfilePartner = () => {
    return (
        <div className='bg-[#F9F5F6]'>
            <Navbar />
            <div className='container mx-auto px-10 py-10'>
                <div className='flex justify-center'>
                    <img src={Picprofile} />
                    <div>
                        <h1 className='text-4xl my-3 ml-3'>Nama Partner</h1>
                        <p className='text-xl ml-3 flex'>Companny address</p>
                    </div>
                </div>
                <div className='flex justify-center my-8'>
                    <div className='px-10 mx-5 border rounded-md '>
                        <p className='text-xl'>4.8<br /><span>Average Rating</span></p>
                    </div>
                    <div className='px-10 border rounded-md mx-5' >
                        <p className='text-xl'>120 <br /><span>Total Event</span></p>
                    </div>
                </div>
                <hr className='my-10 ' />
                <div className='text-center'>
                    <h1 className='text-2xl my-5 underline underline-offset-1'>EVENT YANG PERNAH KAMU TANGANI </h1>
                    <div className="flex justify-center my-5">
                        <img src={Dummy} width={500} alt="profilepartner" />
                    </div>
                </div>
                <hr className='my-10' />
                <div className>
                    <h1 className='text-4xl text-center underline underline-offset-1'>LIST SERVICE</h1>
                    <div className='grid gird-cols-2 lg:grid-cols-3 mt-5'>
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePartner