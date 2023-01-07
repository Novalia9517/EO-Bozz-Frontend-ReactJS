import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputRegPwd = ({title,id, placeholder, value, check1, check2, change, blur}) => {
    const [seePwd, setSeePwd] = useState(false)
  return (
    <div className="form-control w-full">
        <label className="label mb-[-10px]">
        <span className="label-text text-bozz-one text-sm capitalize">{title}</span>
        </label>
        <div className="flex">
            <div className="relative w-full">
                <div
                className="absolute top-3 right-3 items-center"
                onClick={() => setSeePwd(!seePwd)}
                >
                {seePwd ? <FaRegEye className='text-bozz-one'/> : <FaRegEyeSlash className='text-bozz-one'/>}
                </div>
                <input
                value={value} id={id}
                type={seePwd ? `text` : "password"}
                className={`border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-bozz-two text-xs px-3  ${check1 && check2 ? `border-red-700` : `border-bozz-one`}  bg-bozz-five text-bozz-one w-full caret-bozz-one`}
                placeholder={placeholder}
                onChange={change}
                onBlur={blur}
                />
            </div>
        </div>
        {check1 && check2 ? <p className='text-xs text-red-700'>{check1}</p> : null}
    </div>
  )
}

export default InputRegPwd