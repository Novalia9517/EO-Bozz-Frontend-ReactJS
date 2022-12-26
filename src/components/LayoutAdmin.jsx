import React, { useEffect, useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import SideBarAdmin from './SideBarAdmin'
import { useCookies } from 'react-cookie';

const LayoutAdmin = ({children}) => {
    const [cookie, setCookie] = useCookies()
    const role = cookie.role
    const name = cookie.name

    useEffect(() => {
        // setRole('admin')
        // setName('Jane Doe')
    },[])

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