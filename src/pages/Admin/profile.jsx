import React, { useState } from 'react'
import SideBarAdmin from '../../components/SideBarAdmin'
import Admin from '../../assets/employee.png'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

const Profile = () => {
    const role = 'admin'
    const name = 'Jane Doe'
    const [edit,setEdit] = useState(false)
  return (
    <div className='min-h-screen w-screen flex bg-bozz-five'>
        <SideBarAdmin role={role} name={name}/>
        <div className='flex w-[75%] px-14 py-5'>
            <div className='w-[25%] h-full py-12 flex flex-col items-center'>
                <div className='relative'>
                    <img src={Admin} className='rounded-full h-48 w-48 border border-bozz-one'/>
                    <div className="flex text-bozz-one absolute right-6 bottom-0"><FaEdit className='text-2xl'/>
                        <input type={'file'} className='hidden'></input>
                    </div>
                </div>
                <p className='text-xl text-bozz-one font-semibold text-center capitalize mt-3'>{name}</p>
                <p className='text-sm text-bozz-one font-semibold text-center capitalize'>{role}</p>
                <button className='underline text-bozz-one mt-8 font-semibold ' >Edit Password</button>
            </div>
            <div className='w-[75%] h-full py-12 pl-8 pr-16'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-bozz-one font-bold text-xl'>PROFILE INFO</h1>
                    <button 
                        className='text-bozz-one cursor-pointer font-semibold flex' 
                        onClick={() => setEdit(!edit)}><FaEdit className='text-xl'/>Edit</button>
                </div>
                {edit === false ?
                    <div className='mt-5'>
                        <div className='mt-3'>
                            <span className="label-text text-bozz-three capitalize">{role} Email</span>
                            <p className='text-lg font-semibold text-bozz-one border-b border-bozz-one'>nova@gmail.com</p>
                        </div>
                        <div className='mt-3'>
                            <span className="label-text text-bozz-three capitalize">{role} Phone</span>
                            <p className='text-lg font-semibold text-bozz-one border-b border-bozz-one'>0899-9999-9999</p>
                        </div>
                        <div className={`mt-3 ${role == 'admin' ? 'block' : 'hidden'}`}>
                            <span className="label-text text-bozz-three capitalize">NIK</span>
                            <p className='text-lg font-semibold text-bozz-one border-b border-bozz-one'>1212101</p>
                        </div>
                        <div className={`mt-3 ${role == 'admin' ? 'hidden' : 'block'}`}>
                            <span className="label-text text-bozz-three capitalize">City</span>
                            <p className='text-lg font-semibold text-bozz-one border-b border-bozz-one'>Jakarta</p>
                        </div>
                        <div className={`mt-3 ${role == 'admin' ? 'hidden' : 'block'}`}>
                            <span className="label-text text-bozz-three capitalize">NIK</span>
                            <p className='text-lg font-semibold text-bozz-one border-b border-bozz-one'>Jln. semua butuh perjuangan No.27</p>
                        </div>
                    </div>
                : 
                <div className='mt-5'>
                    <h1 className='text-center text-bozz-three font-semibold text-lg'>Edit Profile</h1>
                    <div className="form-control w-full">
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three capitalize">{role} Name</span>
                        </label>
                        <input
                            type='text' id='name'
                            placeholder='Novalia'
                            className={`input px-5 w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                            />
                    </div>
                    <div className="form-control w-full mt-3">
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three capitalize">{role} Email</span>
                        </label>
                        <input
                            type='text' id='name'
                            placeholder='Novalia'
                            className={`input input-bordered w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                            />
                    </div>
                    <div className="form-control w-full mt-3">
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three capitalize">{role} Phone</span>
                        </label>
                        <input
                            type='text' id='name'
                            placeholder='Novalia'
                            className={`input input-bordered w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                            />
                    </div>
                    <div className={`form-control w-full mt-3 ${role === 'admin' ? 'block' : 'hidden'}`}>
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three">NIK</span>
                        </label>
                        <input
                            type='text' id='name'
                            placeholder='Novalia'
                            className={`input input-bordered w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                        />
                    </div>
                    <div className={`form-control w-full mt-3 ${role === 'partner' ? 'block' : 'hidden'}`}>
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three">City</span>
                        </label>
                        <input
                            type='text' id='name'
                            placeholder='Novalia'
                            className={`input input-bordered w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                        />
                    </div>
                    <div className={`form-control w-full mt-3 ${role === 'partner' ? 'block' : 'hidden'}`}>
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three">Address</span>
                        </label>
                        <input
                            type='text' id='name'
                            placeholder='Novalia'
                            className={`input input-bordered w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                        />
                    </div>
                    <div className='flex justify-end w-full mt-8 text-sm'>
                        <button className='bg-[#EF6D58] h-8 w-16 rounded-lg text-bozz-six hover:scale-110'>Cancel</button>
                        <button className='bg-bozz-three text-bozz-six w-28 mx-3 rounded-lg hover:scale-110'>Submit Edit</button>
                    </div>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Profile