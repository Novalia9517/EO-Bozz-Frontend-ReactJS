import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useCookies } from 'react-cookie'

const Navbar = () => {

    const [cookie, removeCookie] = useCookies(["userToken"])
    const navigate = useNavigate()
    const token = localStorage.getItem("userToken")

    const onLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#17345f",
            confirmButtonText: "Yes, sure",
            cancelButtonColor: "#F47522",
            cancelButtonText: "Not now",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    text: "logout success, see you 👋🏻",
                    showConfirmButton: false,
                    timer: 1500,
                });
                localStorage.removeItem("userToken");
                localStorage.removeItem("name");
                localStorage.removeItem("id");
                localStorage.removeItem("role");

                navigate('/login')
            }
        });
    }

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
                            {token ? (
                                <ul tabIndex={0} className="text-bozz-one mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to={"/profile"} className="justify-between">
                                            Profile
                                        </Link>
                                    </li>
                                    <li className='cursor-pointer' onClick={onLogout}>Logout</li>
                                </ul>
                            ) : <div>
                                <button>Login</button>
                                <button>Register</button>
                            </div>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
