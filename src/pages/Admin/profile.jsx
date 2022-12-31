import React, { useEffect, useState } from 'react'
import SideBarAdmin from '../../components/SideBarAdmin'
import Admin from '../../assets/employee.png'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import { useCookies } from 'react-cookie'
import { apiWithAuth } from '../../services/api'
import Loading from '../../components/Loading'

const Profile = () => {
    const userId = localStorage.getItem('id')
    const userToken = localStorage.getItem('userToken')
    const [userData, setUserData] = useState()
    const [edit,setEdit] = useState(false)
    const [name, setName] = useState()
    const [role, setRole] = useState()
    const [email, setEmail] = useState()

    const getUserData = async() => {
        apiWithAuth(`users/${userId}`, `GET`, null,"application/json", userToken)
        .then(res => {
            setUserData(res.data)
            setName(res.data.name)
            setEmail(res.data.email)
        })
        .catch(err => console.log(err))
    }

    const onSubmitEdit =async() => {
        
    }
    
    useEffect(() => {
        getUserData()
    },[])
    console.log(userData)

  return (
    <>
    {userData ? 
    
    <div className='min-h-screen w-screen flex bg-bozz-five'>
        <SideBarAdmin role={userData.role} name={userData.name}/>
        <div className='flex w-[75%] px-14 py-5'>
            <div className='w-[25%] h-full py-12 flex flex-col items-center'>
                <div className='relative'>
                    <img src={Admin} className='rounded-full h-48 w-48 border border-bozz-one'/>
                    <div className="flex text-bozz-one absolute right-6 bottom-0"><FaEdit className='text-2xl'/>
                        <input type={'file'} className='hidden'></input>
                    </div>
                </div>
                <p className='text-xl text-bozz-one font-semibold text-center capitalize mt-3'>{userData.name}</p>
                <p className='text-sm text-bozz-one font-semibold text-center capitalize'>{userData.rolel}</p>
                <p className='underline text-bozz-one mt-8 font-semibold bg-bozz-five' >Edit Password</p>
            </div>
            <div className='w-[75%] h-full py-12 pl-8 pr-16'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-bozz-one font-bold text-xl'>PROFILE INFO</h1>
                    <p 
                        className='text-bozz-one cursor-pointer font-semibold flex' 
                        onClick={() => setEdit(!edit)}><FaEdit className='text-xl'/>Edit</p>
                </div>
                {edit === false ?
                    <div className='mt-5'>
                        <div className='mt-3'>
                            <span className="label-text text-bozz-three capitalize">{userData.role} Email</span>
                            <p className='text-lg font-semibold text-bozz-one border-b border-bozz-one'>{userData.email}</p>
                        </div>
                        <div className='mt-3'>
                            <span className="label-text text-bozz-three capitalize">{role} Phone</span>
                            <p className='text-lg font-semibold text-bozz-one border-b border-bozz-one'>0899-9999-9999</p>
                        </div>
                        
                    </div>
                : 
                <div className='mt-5'>
                    <h1 className='text-center text-bozz-three font-semibold text-lg'>Edit Profile</h1>
                    <div className="form-control w-full">
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three capitalize">{userData.role} Name</span>
                        </label>
                        <input
                            type='text' id='name' value={name}
                            placeholder='Novalia' onChange={(e) =>  setName(E.target.value)}
                            className={`input px-5 w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                            />
                    </div>
                    <div className="form-control w-full mt-3">
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three capitalize">{userData.role} Email</span>
                        </label>
                        <input
                            type='text' id='name' value={email}
                            placeholder='Novalia' onChange={(e) => setEmail(e.target.value)}
                            className={`input input-bordered w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                            />
                    </div>
                    <div className="form-control w-full mt-3">
                        <label className="label mb-[-10px]">
                            <span className="label-text text-bozz-three capitalize">{userData.role} Phone</span>
                        </label>
                        <input
                            type='text' id='name'
                            placeholder='Novalia'
                            className={`input input-bordered w-full border-bozz-three bg-bozz-five caret-text-bozz-three text-bozz-three`}
                            required
                            />
                    </div>
                    <div className='flex gap-5'>
                        <div className="form-control mt-3 w-full" type='gender' id='gender' value={values.gender}>
                            <p className='label-text text-bozz-one'>Gender</p>
                            <div className='flex gap-5'>
                                <label htmlFor='male' className="label cursor-pointer w-20">
                                    <input id='male' type="radio" name="gender" value='Male' className="radio peer/male checked:bg-blue-500 border-bozz-two"  onChange={handleChange} checked={values.gender === 'Male' ? true : false}/>
                                    <span className="label-text peer-checked/female:text-bozz-two peer-checked/male:font-semibold">Male</span> 
                                </label>
                                <label htmlFor='female' className="label cursor-pointer w-20">
                                    <input id='female' type="radio" name="gender" value='Female'className="radio peer/female checked:radio-error border-bozz-two" onChange={handleChange} checked={values.gender === 'Female' ? true : false}/>
                                    <span className="label-text peer-checked/female:text-bozz-two peer-checked/female:font-semibold">Female</span> 
                                </label>
                            </div>
                        </div>
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
                        <button className='bg-[#EF6D58] px-3 w-20 rounded-lg text-bozz-six hover:scale-110'>Cancel</button>
                        <button className='bg-bozz-three text-bozz-six w-28 mx-3 rounded-lg hover:scale-110' onClick={onSubmitEdit}>Submit Edit</button>
                    </div>
                </div>
                }
            </div>
        </div>
    </div>
    : <Loading/>
}
    </>
  )
}

export default Profile