import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const CustomInput = ({width, type = 'text', placeholder, label}) => {
    const [seePwd, setSeePwd] = useState(false)
  return (
    <div className="form-control w-full pr-16">
        <label className="label mb-[-10px]">
        <span className="label-text text-bozz-one">{label}</span>
        </label>
        {type === 'text' && 
            <input
                type={type} id={label}
                placeholder={placeholder}
                className={`input input-bordered ${width} border-bozz-one bg-bozz-five caret-text-bozz-one text-bozz-one`}
                required
            />
        }
        {type === 'file' && 
            <input
                type={type} id={label}
                placeholder={placeholder}
                className={`h-12 rounded-lg border ${width} border-bozz-one bg-bozz-five caret-text-bozz-one text-bozz-one file:bg-bozz-one file:h-full`}
                required
            />
        }
        {type === 'password' && 
            <div className="flex">
                <div className="relative w-full">
                    <div
                    className="absolute top-3 right-3 items-center"
                    onClick={() => setSeePwd(!seePwd)}
                    >
                    {seePwd ? <FaRegEye className='text-bozz-one'/> : <FaRegEyeSlash className='text-bozz-one'/>}
                    </div>
                    <input
                    type={seePwd ? `text` : "password"}
                    className={`input border-bozz-one  bg-bozz-five text-bozz-one w-full caret-bozz-one`}
                    placeholder="Password"
                    />
                </div>
            </div>
        }
    </div>
  )
}

export default CustomInput