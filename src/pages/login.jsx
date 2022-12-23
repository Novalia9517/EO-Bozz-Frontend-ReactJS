import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { loginSchema } from '../validations/validations';


const Login = () => {
    const [role, setRole] = useState('')
    const [seePwd, setSeePwd] = useState(false)
    const navigate = useNavigate()

    const onSubmit = () => {
        console.log('submitted')
        navigate('/register/user')
    }

    const {values,errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validationSchema : loginSchema,
        onSubmit
    })
    const onRegister = () => {
        if(role === 'partner'){
            navigate('/register/partner')
        }else if(role === 'clients'){
            navigate('/register/user')
        }
    }
    console.log(errors)

  return (
    <div className='flex h-screen w-screen bg-white'>
        <div className={`w-[55%]`} >
            <img src='src/assets/shoes.jpg' className='w-full h-full object-fill' style={{borderRadius : '0 110px 110px 0'}}/>
        </div>
        <div className='w-[45%] h-full grid place-items-center p-10'>
            { role === '' ?
                <div className='card rounded-[47px] w-[80%] h-[90%] border border-bozz-one flex flex-col justity- p-10 px-24 shadow-[6px_6px_6px_rgba(83,62,133,0.5)] bg-bozz-six'>
                    <h2 className='text-bozz-one font-bold text-center text-xl mb-10'>LOGIN AS</h2>
                    <button className='bg-bozz-five text-bozz-one w-full h-12 rounded-xl font-bold border border-bozz-one hover:scale-110' onClick={() => setRole('clients')}>User</button>
                    <p className='text-black text-center my-3 text-xs'>OR</p>
                    <button className='bg-bozz-five text-bozz-one w-full h-12 rounded-xl font-bold border border-bozz-one hover:scale-110' onClick={() => setRole('partner')}>Partner</button>
                    <p className='text-black text-center my-3 text-xs'>OR</p>
                    <button className='bg-bozz-five text-bozz-one w-full h-12 rounded-xl font-bold border border-bozz-one hover:scale-110' onClick={() => setRole('admin')}>Admin</button>
                </div>
            :
                <div className='card rounded-[47px] w-[80%] h-[90%] border border-bozz-one flex flex-col justity- p-10 px-24 shadow-[6px_6px_6px_rgba(83,62,133,0.5)] bg-bozz-six'>
                    <h2 className='text-bozz-one font-bold text-center text-xl mb-10'>LOGIN AS {role.toUpperCase()}</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label mb-[-10px]">
                        <span className="label-text text-bozz-one">Email</span>
                        </label>
                        <input
                            type="email" value={values.email} id='email'
                            placeholder="your_email@mail.com"
                            className={`input input-bordered ${errors.email && touched.email ? `border-red-700` : `border-bozz-one`} w-full bg-bozz-five caret-text-bozz-one text-bozz-one`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email? <p className='text-xs text-red-700'>{errors.email}</p> : null}
                    </div>
                    <div className="form-control w-full max-w-xs">
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
                                className={`input ${errors.password && touched.password ? `border-red-700` : `border-bozz-one`}  bg-bozz-five text-bozz-one w-full caret-bozz-one`}
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {errors.password && touched.password ? <p className='text-xs text-red-700'>{errors.password}</p> : null}
                    </div>
                    <a className="text-bozz-one text-xs mt-1">Forgot Your Password?</a>
                    <div className="flex justify-center">
                        <button
                        className="bg-bozz-one text-bozz-six h-[40px] w-full mt-8 rounded-lg"
                        // onClick={() => onLogin()}
                        type='submit'
                        >
                        Login
                        </button>
                    </div>
                    { role !== 'admin' ?
                        <p className="text-bozz-one text-sm mt-3">
                            Dont have an account ?
                            <a
                            className="font-semibold cursor-pointer"
                            onClick={() => onRegister()}
                            >
                            {" "}
                            Register
                            </a>
                        </p> : null
                    }
              </form>
            </div>
            }
           
        </div>
    </div>
  )
}

export default Login