import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='relative bg-bozz-one'>
            <div className='container mx-auto py-px-10'>
                <div className="navbar text-white">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-2xl">EO Bozz</a>
                        <div className='pl-5'>
                            <Link to={"/"} className="btn btn-ghost normal-case text-lg">Home</Link>
                        </div>
                    </div>

                    <div className="flex-none gap-2">
                        <div className="form-control text-black">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="text-bozz-one mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={"/profile"} className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li><a >Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
