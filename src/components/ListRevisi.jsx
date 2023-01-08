import React from 'react'

const ListRevisi = ({label,  placeholder, id, value, check1, check2, change, blur, type='text'}) => {
  return (
    <div className='flex flex-col mt-2 w-full pr-12'>
        <label className='text-bozz-three text-sm font-semibold capitalize'>{label}</label>
        {/* <input type='text' className='w-full h-8 text-xs focus:outline-none focus:ring-1 focus:ring-bozz-three bg-bozz-six rounded-lg placeholder:text-bozz-one caret:text-bozz-one  border border-bozz-three px-3' placeholder={placeholder}/> */}
        <input
            type={type} value={value} id={id}
            placeholder={placeholder}
            className={`border rounded-lg h-8 focus:outline-none focus:ring-2 focus:ring-bozz-three text-xs px-3 ${check1 && check2? `border-red-700` : `border-bozz-one`} w-full bg-bozz-five caret-text-bozz-one text-bozz-one ${type=='file' ? `file:bg-bozz-one file:h-full rounded-none px-0` : ''}`}
            onChange={change}
            onBlur={blur}
        />
        {check1 && check2? <p className='text-xs text-red-700'>{check1}</p> : null}
    </div>
  )
}

export default ListRevisi