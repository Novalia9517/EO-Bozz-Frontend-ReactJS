import React from 'react'
import CustomInput from './CustomInput'

const RegisterTwo = () => {
  return (
    <div className='w-full mt-3'>
    <h1 className='text-xl font-semibold text-bozz-one'>PIC INFORMATION</h1>
    <div className='flex justify-between'>
        <CustomInput width='w-full' type ='text' placeholder='PIC Name' label='PIC Name'/>
        <CustomInput width='w-full' type ='text' placeholder='PIC Position' label='PIC Position'/>
    </div>
    <div className='flex justify-between'>
        <CustomInput width='w-full' type ='text' placeholder='PIC Phone' label='PIC Phone'/>
        <CustomInput width='w-full' type ='text' placeholder='PIC Email' label='PIC Email'/>
    </div>
    <div className="form-control w-full pr-16">
        <label className="label mb-[-10px]">
        <span className="label-text text-bozz-one">PIC Address</span>
        </label>
        <textarea
            placeholder={'Jln. Anggrek Putih No.227'}
            className={`input input-bordered h-16 resize-none w-full border-bozz-one bg-bozz-five caret-text-bozz-one text-bozz-one`}
            required
        />
        {/* {errors.email && touched.email? <p className='text-xs text-red-700'>{errors.email}</p> : null} */}
    </div>
</div>
  )
}

export default RegisterTwo