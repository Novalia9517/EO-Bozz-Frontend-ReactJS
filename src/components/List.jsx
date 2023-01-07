import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageModal from './ImageModal'

const List = ({title, value, link, checked, onChange}) => {
  return (
    <div className="form-control flex justify-between">
        <label className="cursor-pointer label">
            <div>
                <p className='text-bozz-two text-sm'>{title}</p>
                <p className='text-bozz-one font-semibold'>{value}</p>
                {link ?
                <>
                    <label htmlFor="my-modal-4" 
                      className='btn text-xs border border-white px-3 h-6 bg-bozz-three hover:bg-bozz-two text-bozz-six rounded-lg text-[10px]'
                      >See Image</label>
                      <ImageModal link={link} title={title}/>
                </>
                  : null}
            </div>
            <input 
                type="checkbox" onChange={onChange} checked={checked}
                className="checkbox checkbox-primary checkbox-md checked:text-white" />
        </label>
    </div>
  )
}

export default List