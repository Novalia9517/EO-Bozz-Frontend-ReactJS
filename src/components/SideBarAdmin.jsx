import React, { useEffect, useState } from 'react'
import { FaHome, FaThList, FaTable, FaMoneyCheckAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SideBarAdmin = ({role, name}) => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen w-[25%] bg-bozz-one pt-24 px-10 cursor-pointer'>
        <h1 className='text-white font-bold text-4xl text-center drop-shadow-[0_4px_4px_#352360] hover:animate-bounce'>EO-Bozz</h1>
            { role === 'partner' ? 
                <ul className='flex flex-col px-10 w-full mt-8'>
                    <li 
                        className='flex text-white font-bold text-md my-3 items-center'
                        onClick={() => navigate('/partner/')}
                        >
                        <FaHome  className='text-3xl mx-4'/>
                        <span>Dashboard</span>
                    </li>
                    {/* <li 
                        className='flex text-white font-bold text-md my-3 items-center'
                        onClick={() => navigate('/partner/')}
                        >
                        <FaThList className='text-2xl mx-5'/>
                        <span>My Services</span>
                    </li> */}
                    <li 
                        className='flex text-white font-bold text-md my-3 items-center'
                        onClick={() => navigate('/partner/list-order')}
                        >
                        <FaTable className='text-2xl mx-5'/>
                        <span>My Order</span>
                    </li>
                </ul>
            : <ul className='flex flex-col px-10 w-full mt-8'>
                <li 
                    className='flex text-white font-bold text-md my-3 items-center'
                    onClick={() => navigate('/admin/')}
                    >
                    <FaHome  className='text-3xl mx-4'/>
                    <span>Dashboard</span>
                </li>
                <li 
                    className='flex text-white font-bold text-md my-3 items-center'
                    onClick={() => navigate('/admin/list-order')}
                    >
                    <FaThList className='text-2xl mx-5'/>
                    <span>List Order</span>
                </li>
            </ul>
            }
    </div>
  )
}

export default SideBarAdmin