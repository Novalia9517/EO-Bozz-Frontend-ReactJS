import React from 'react'

const InputReg = ({title,id, placeholder, value, check1, check2, change, blur, type='text'}) => {
  return (
    <div className="form-control w-full">
        <label className="label mb-[-10px]">
        <span className="label-text text-bozz-one capitalize">{title}</span>
        </label>
        <input
            type={type} value={value} id={id}
            placeholder={placeholder}
            className={`border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-bozz-two text-xs px-3 ${check1 && check2? `border-red-700` : `border-bozz-one`} w-full bg-bozz-five caret-text-bozz-one text-bozz-one ${type=='file' ? `file:bg-bozz-one file:h-full rounded-none px-0` : ''}`}
            onChange={change}
            onBlur={blur}
        />
        {check1 && check2? <p className='text-xs text-red-700'>{check1}</p> : null}
    </div>
  )
}

export default InputReg