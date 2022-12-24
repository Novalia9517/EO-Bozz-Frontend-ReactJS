import React from 'react'
import Admin from '../assets/shoes.jpg'
import { FaUserAlt } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
import { Link } from 'react-router-dom'


const NavbarAdmin = ({role, name}) => {
    const link = role === 'partner' ? '/partner/profile' : '/admin/profile'
    return (
        <div className='flex justify-between items-center w-full mb-5'>
            <div className='flex flex-col'>
                <h1 className='text-4xl font-bold text-bozz-one'>Hello {name} !</h1>
                <p className='text-sm font-semibold text-bozz-one'>You're doing great</p>
            </div>
            <div className='flex items-center'>
                <img src={Admin} className='rounded-full w-14 h-14 border border-bozz-one mx-5'/>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="flex flex-col">
                            <p className='text-lg font-semibold text-bozz-one hover:scale-110'>{name}</p>
                            <p className='text-sm font-semibold text-bozz-one capitalize'>{role}</p>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-bozz-six text-bozz-one border border-bozz-one rounded-box w-32">
                        <li>
                            <Link to={link}
                                className="justify-between"><FaUserAlt className='text-md'
                                onClick={() => profileClick()}/>Profile</Link>
                        </li>
                        <li><a className="justify-between"><TbLogout className='text-lg'/>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin