import React, { useState } from 'react'

const List = ({title, value, link, checked, onChange}) => {
  return (
    <div className="form-control flex justify-between">
        <label className="cursor-pointer label">
            <div>
                <p className='text-bozz-two text-sm'>{title}</p>
                <p className='text-bozz-one font-semibold'>{value}</p>
                {link ? <button className='w-32 h-8 text-white text-xs bg-bozz-one rounded-lg mt-2'>Download File</button> : null}
            </div>
            <input 
                type="checkbox" onChange={onChange} checked={checked}
                className="checkbox checkbox-primary checkbox-md checked:text-white" />
        </label>
    </div>
  )
}

export default List