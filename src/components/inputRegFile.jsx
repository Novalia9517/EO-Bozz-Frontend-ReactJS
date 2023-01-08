import React from 'react'

const InputRegFile = ({title, placeholder, change}) => {
  return (
    <div className="form-control w-full">
        <label className="label mb-[-10px]">
        <span className="label-text text-bozz-one capitalize">{title}</span>
        </label>
        <input
            type='file' id='file'
            placeholder={placeholder}
            className={`border rounded-lg h-8 border-bozz-one focus:outline-none focus:ring-2 focus:ring-bozz-two text-xs px-3 w-full bg-bozz-five caret-text-bozz-one text-bozz-one file:bg-bozz-one file:h-full rounded-none px-0`}
            onChange={change} required
        />
    </div>
  )
}

export default InputRegFile