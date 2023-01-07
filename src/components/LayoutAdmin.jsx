import React, { useEffect, useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import SideBarAdmin from './SideBarAdmin'
import { useCookies } from 'react-cookie';
import { apiRequest, apiWithAuth } from '../services/api';
import { useSelector } from 'react-redux';

const LayoutAdmin = ({children}) => {
    const [cookie, setCookie] = useCookies()
    const role = localStorage.getItem('role')
    const token = localStorage.getItem('userToken')
    // const role = 'Admin'
    const name = localStorage.getItem('name')
    const data = useSelector(state => state.users.currentUser)
    const img = data.company_image_file


    // console.log(data)
  return (
    <div className='min-h-screen w-screen flex bg-bozz-five'>
        <SideBarAdmin role={role} name={name}/>
        <div className='flex flex-col w-[75%] px-14 py-3'>
            <NavbarAdmin role={role} name={name}/>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default LayoutAdmin