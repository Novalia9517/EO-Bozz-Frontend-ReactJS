import React from 'react'
import CustomInput from './CustomInput'

const RegisterFour = () => {
  return (
    <div className='w-full mt-3'>
    <h1 className='text-xl font-semibold text-bozz-one'>BANK ACCOUNT</h1>
    <div className='flex justify-between gap-5'>
        <CustomInput width='w-full' type ='text' placeholder='Bank Name' label='Bank Name'/>
        <CustomInput width='w-full' type ='text' placeholder='Bank Account Name' label='Bank Account Name'/>
    </div>
    <CustomInput width='w-full' type ='text' placeholder='299123456' label='Bank Account Number'/>
    <h1 className='text-xl font-semibold text-bozz-one mt-5'>PASSWORD</h1>
    <div className='flex justify-between gap-5'>
        <CustomInput width='w-full' type ='password' placeholder='Input Password' label='Input Password'/>
        <CustomInput width='w-full' type ='password' placeholder='Confirm Password' label='Confirm Password'/>
    </div>
</div>
  )
}

export default RegisterFour