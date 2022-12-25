import React, {useState} from 'react'
import Background from '../assets/shoes.jpg'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { registerSchema } from '../validations/validations';

const RegisterUser = () => {
    const [seePwd, setSeePwd] = useState(false)
    const [seePwdConf, setSeePwdConf] = useState(false)
    const navigate = useNavigate()

    const onSubmit = () => {
        console.log('submitted')
        navigate('/login')
    }

    const {values,errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : {
          username : '',
          email : '',
          phone: '',
          password : '',
          confirmPassword : ''
        },
        validationSchema : registerSchema,
        onSubmit
    })
  return (
    <div className={`h-screen w-screen relative`}>
        <img src={Background} className='w-full h-full object-fill relative'/>         
        <div className="absolute top-0 px-56 py-5 w-[100%] h-full flex justify-center">
            <div className='card rounded-xl w-[70%] bg-bozz-five px-12 py-5 h-full flex flex-col shadow-[6px_6px_6px_rgba(83,62,133,0.5)]'>
                <h1 className='text-center font-bold text-xl text-bozz-one'>REGISTER USER</h1>
                {/* <div className='card rounded-[47px] w-[80%] h-[90%] border border-bozz-one flex flex-col justity- p-10 px-24 shadow-[6px_6px_6px_rgba(83,62,133,0.5)] bg-bozz-six'> */}
                    <form onSubmit={handleSubmit} className='w-full px-12'>
                    <div className="form-control w-full">
                        <label className="label mb-[-10px]">
                        <span className="label-text text-bozz-one">Username</span>
                        </label>
                        <input
                            type="text" value={values.username} id='username'
                            placeholder="username27"
                            className={`border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-bozz-two text-xs px-3 ${errors.username && touched.username ? `border-red-700` : `border-bozz-one`} w-full bg-bozz-five caret-text-bozz-one text-bozz-one`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.username && touched.username? <p className='text-xs text-red-700'>{errors.username}</p> : null}
                    </div>
                    <div className="form-control w-full">
                        <label className="label mb-[-10px]">
                        <span className="label-text text-bozz-one">Email</span>
                        </label>
                        <input
                            type="email" value={values.email} id='email'
                            placeholder="your_email@mail.com"
                            className={`border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-bozz-two text-xs px-3 ${errors.email && touched.email ? `border-red-700` : `border-bozz-one`} w-full bg-bozz-five caret-text-bozz-one text-bozz-one`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email? <p className='text-xs text-red-700'>{errors.email}</p> : null}
                    </div>
                    <div className="form-control w-full">
                        <label className="label mb-[-10px]">
                        <span className="label-text text-bozz-one">Phone</span>
                        </label>
                        <input
                            type="phone" value={values.phone} id='phone'
                            placeholder="+62891234567"
                            className={`border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-bozz-two text-xs px-3 ${errors.phone && touched.phone ? `border-red-700` : `border-bozz-one`} w-full bg-bozz-five caret-text-bozz-one text-bozz-one`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.phone && touched.phone? <p className='text-xs text-red-700'>{errors.phone}</p> : null}
                    </div>
                    <div className="form-control w-full">
                        <label className="label mb-[-10px]">
                        <span className="label-text text-bozz-one text-sm">Password</span>
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
                                value={values.password} id='password'
                                type={seePwd ? `text` : "password"}
                                className={`border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-bozz-two text-xs px-3  ${errors.password && touched.password ? `border-red-700` : `border-bozz-one`}  bg-bozz-five text-bozz-one w-full caret-bozz-one`}
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {errors.password && touched.password ? <p className='text-xs text-red-700'>{errors.password}</p> : null}
                    </div>
                    <div className="form-control w-full">
                        <label className="label mb-[-10px]">
                        <span className="label-text text-bozz-one text-sm">Confirm Password</span>
                        </label>
                        <div className="flex">
                            <div className="relative w-full">
                                <div
                                className="absolute top-3 right-3 items-center"
                                onClick={() => setSeePwdConf(!seePwdConf)}
                                >
                                {seePwdConf ? <FaRegEye className='text-bozz-one'/> : <FaRegEyeSlash className='text-bozz-one'/>}
                                </div>
                                <input
                                value={values.confirmPassword} id='confirmPassword'
                                type={seePwdConf ? `text` : "password"}
                                className={`border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-bozz-two text-xs px-3 ${errors.confirmPassword && touched.confirmPassword ? `border-red-700` : `border-bozz-one`}  bg-bozz-five text-bozz-one w-full caret-bozz-one`}
                                placeholder="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {errors.confirmPassword && touched.confirmPassword ? <p className='text-xs text-red-700'>{errors.confirmPassword}</p> : null}
                    </div>
                    <a className="text-bozz-one text-xs mt-2 underline">Forgot Your Password?</a>
                    <div className="flex justify-center">
                        <button
                        className="bg-bozz-one text-bozz-six h-8 w-36 rounded-lg text-sm"
                        // onClick={() => onRegister()}
                        type='submit'
                        >
                        Register
                        </button>
                    </div>
                        <p className="text-bozz-one text-sm mt-3 text-center">
                            Have an account ?
                            <a
                            className="font-semibold cursor-pointer"
                            // onClick={() => onRegister()}
                            >Login</a>
                        </p>
              </form>
            {/* </div> */}
        </div>
    </div>
    </div>
  )
}

export default RegisterUser