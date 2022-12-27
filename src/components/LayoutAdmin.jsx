import React, { useEffect, useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import SideBarAdmin from './SideBarAdmin'
import { useCookies } from 'react-cookie';
import { apiRequest, apiWithAuth } from '../services/api';

const LayoutAdmin = ({children}) => {
    const [cookie, setCookie] = useCookies()
    // const role = cookie.role
    const token = cookie.token
    const role = 'Admin'
    const name = cookie.name
    const img = cookie.img
    const getCity = async() => {
      apiWithAuth(`city`, `GET`, null, "application/json", token)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }

    useEffect(() => {
        // getCity()
    },[])

  return (
    <div className='min-h-screen w-screen flex bg-bozz-five'>
        <SideBarAdmin role={role} name={name}/>
        <div className='flex flex-col w-[75%] px-14 py-3'>
            <NavbarAdmin role={role} name={name} img={img}/>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default LayoutAdmin