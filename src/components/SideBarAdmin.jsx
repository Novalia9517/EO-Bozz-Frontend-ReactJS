import React, { useEffect, useState } from 'react'
import { FaHome, FaThList, FaTable, FaMoneyCheckAlt } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
import Swal from 'sweetalert2'
import Logo from '../assets/logo2.png'

const SideBarAdmin = ({role, name}) => {
    const navigate = useNavigate()
    const link = role == 'Partner' ? '/partner/profile' : '/admin/profile'
    const onLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#17345f",
            confirmButtonText: "Yes, sure",
            cancelButtonColor: "#F47522",
            cancelButtonText: "Not now",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    text: "logout success, see you 👋🏻",
                    showConfirmButton: false,
                    timer: 1500,
                });
                localStorage.removeItem("userToken");
                localStorage.removeItem("name");
                localStorage.removeItem("id");
                localStorage.removeItem("role");
                localStorage.removeItem("partner_id");
                navigate('/login')
            }
        });
    }
  return (
    <div className='min-h-screen w-[20%] bg-bozz-one pt-12 px-10 cursor-pointer'>
        {/* <h1 className='text-white font-bold text-4xl text-center drop-shadow-[0_4px_4px_#352360] hover:animate-bounce'>EO-Bozz</h1> */}
        <div className='flex justify-center mb-[-50px]'>
            <img src={Logo} className='w-40 align-center drop-shadow-[0_6px_6px_#352360] hover:animate-bounce'/>
        </div>
            { role === 'Partner' ? 
                <ul className='flex flex-col px-10 w-full'>
                    <li 
                        className='flex text-white font-bold text-xs my-3 items-center'
                        onClick={() => navigate('/partner/')}
                        >
                        <FaHome  className='text-xl mx-4'/>
                        <span>Dashboard</span>
                    </li>
                    <li 
                        className='flex text-white font-bold text-xs my-3 items-center'
                        onClick={() => navigate('/partner/list-order')}
                        >
                        <FaTable className='text-lg mx-4'/>
                        <span>My Order</span>
                    </li>
                    {/* <li 
                        className='flex text-white font-bold text-xs my-3 items-center'
                        onClick={() => navigate('/partner/discussion')}
                        >
                        <FaThList className='text-lg mx-4'/>
                        <span>Discussion</span>
                    </li> */}
                    <li>
                        <Link to={link}
                            className="flex text-white font-bold text-xs my-3 items-center">
                                <FaUserAlt className='text-lg mx-4'
                                onClick={() => profileClick()} />Profile</Link>
                    </li>
                    <li onClick={onLogout}><a className="flex text-white font-bold text-xs my-3 items-center"><TbLogout className='text-lg mx-4' />Logout</a></li>
                </ul>
            : <ul className='flex flex-col px-10 w-full mt-8'>
                <li 
                    className='flex text-white font-bold text-xs my-3 items-center'
                    onClick={() => navigate('/admin/')}
                    >
                    <FaHome  className='text-xl mx-4'/>
                    <span>Dashboard</span>
                </li>
                <li 
                    className='flex text-white font-bold text-xs my-3 items-center'
                    onClick={() => navigate('/admin/list-order')}
                    >
                    <FaThList className='text-lg mx-4'/>
                    <span>List Order</span>
                </li>
                <li>
                    <Link to={link}
                        className="flex text-white font-bold text-xs my-3 items-center">
                            <FaUserAlt className='text-lg mx-4'
                            onClick={() => profileClick()} />Profile</Link>
                    </li>
                    <li onClick={onLogout}><a className="flex text-white font-bold text-xs my-3 items-center"><TbLogout className='text-lg mx-4' />Logout</a></li>
            </ul>
            }
    </div>
  )
}

export default SideBarAdmin