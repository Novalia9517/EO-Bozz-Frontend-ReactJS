import React from 'react'

const EditInput = ({label, value, change, id, placeholder}) => {
  return (
    <div className="form-control w-full">
        <label className="label mb-[-10px]">
            <span className="label-text text-bozz-three capitalize">{label}</span>
        </label>
        <input
            type='text' id={id} value={value}
            placeholder={placeholder} onChange={change}
            className={`input px-5 w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
            required
            />
    </div>
  )
}

export default EditInput