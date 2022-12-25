import React from 'react'

const ListRevisi = ({label, placeholder}) => {
  return (
    <div className='flex flex-col mt-2 w-full'>
        <label className='text-bozz-three text-sm font-semibold capitalize'>{label}</label>
        <input type='text' className='w-full h-8 text-xs focus:outline-none focus:ring-1 focus:ring-bozz-three bg-bozz-six rounded-lg placeholder:text-bozz-one caret:text-bozz-one  border border-bozz-three px-3' placeholder={placeholder}/>
    </div>
  )
}

export default ListRevisi