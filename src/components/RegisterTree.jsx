import React from 'react'
import CustomInput from './CustomInput'

const RegisterTree = () => {
  return (
    <div className='w-full mt-3'>
        <h1 className='text-xl font-semibold text-bozz-one'>DOCUMENTS</h1>
        <div className='flex justify-between'>
            <CustomInput width='w-full' type ='text' placeholder='9120003540844' label='NIB No.'/>
            <CustomInput width='w-full' type ='file' placeholder='Scan NIB' label='Scan NIB'/>
        </div>
        <div className='flex justify-between'>
            <CustomInput width='w-full' type ='text' placeholder='9120003540844' label='SIUP No.'/>
            <CustomInput width='w-full' type ='file' placeholder='Scan SIUP' label='Scan SIUP'/>
        </div>
        <h1 className='text-xl font-semibold text-bozz-one'>EVENTS</h1>
        <div className='flex justify-between'>
            <CustomInput width='w-full' type ='text' placeholder='Event Name' label='EVENT 1'/>
            <CustomInput width='w-full' type ='file' placeholder='Event Photo' label='Event Photo'/>
        </div>
        <div className='flex justify-between'>
            <CustomInput width='w-full' type ='text' placeholder='Event Name' label='EVENT 2'/>
            <CustomInput width='w-full' type ='file' placeholder='Event Photo' label='Event Photo'/>
        </div>
        <div className='flex justify-between'>
            <CustomInput width='w-full' type ='text' placeholder='Event Name' label='EVENT 2'/>
            <CustomInput width='w-full' type ='file' placeholder='Event Photo' label='Event Photo'/>
        </div>
    </div>
  )
}

export default RegisterTree