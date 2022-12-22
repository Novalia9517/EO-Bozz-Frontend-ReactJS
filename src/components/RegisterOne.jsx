import React from 'react'
import CustomInput from './CustomInput'

const RegisterOne = () => {
  return (
    <div className='w-full mt-3'>
        <h1 className='text-xl font-semibold text-bozz-one'>COMPANY INFORMATION</h1>
        <div className='flex justify-between'>
            <CustomInput width='w-full' type ='text' placeholder='Company Name' label='Company Name'/>
            <CustomInput width='w-full' type ='text' placeholder='Company Email' label='Company Email'/>
        </div>
        <div className='flex justify-between'>
            <CustomInput width='w-full' type ='text' placeholder='Company Phone' label='Company Phone'/>
            <CustomInput width='w-full' type ='text' placeholder='Category' label='Category'/>
        </div>
        <div className='flex justify-between'>
            <CustomInput width='w-full' type ='text' placeholder='Company City' label='Company City'/>
            <CustomInput width='w-full' type ='file' placeholder='Company Profile' label='Company Image'/>
        </div>
        <div className="form-control w-full pr-16">
            <label className="label mb-[-10px]">
            <span className="label-text text-bozz-one">Company Address</span>
            </label>
            <textarea
                placeholder={'Jln. Anggrek Putih No.227'}
                className={`input input-bordered  h-16 resize-none w-full border-bozz-one bg-bozz-five caret-text-bozz-one text-bozz-one`}
                required
            />
            {/* {errors.email && touched.email? <p className='text-xs text-red-700'>{errors.email}</p> : null} */}
        </div>
        <CustomInput width='w-full' type ='text' placeholder='https://yourlink' label='Link Sosmed / Website'/>
    </div>
  )
}

export default RegisterOne