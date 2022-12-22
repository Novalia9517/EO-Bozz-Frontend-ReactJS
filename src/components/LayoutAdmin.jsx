import React, { useEffect, useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import SideBarAdmin from './SideBarAdmin'

const LayoutAdmin = ({children}) => {
    const [role, setRole] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        setRole('admin')
        setName('Jane Doe')
    },[])

  return (
    <div className='min-h-screen w-screen flex bg-bozz-five'>
        <SideBarAdmin role={role} name={name}/>
        <div className='flex flex-col w-[75%] px-14 py-8'>
            <NavbarAdmin role={role} name={name}/>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default LayoutAdmin