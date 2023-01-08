import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo2.png'

const Footer = () => {
    return (

        <footer className="footer p-10 bg-bozz-one text-white mt-auto">
            <div className='flex ml-8 items-center'>
                <img src={Logo} className='w-16 align-center drop-shadow-[0_6px_6px_#352360]'/>
                <h1 className='italic font-semibold drop-shadow-[0_6px_6px_#352360]'>EO Bozz</h1>
            </div>
            <div>
                <span className="footer-title drop-shadow-[0_6px_6px_#352360]">For Beginners</span>
                <Link to='/register/user' className="link link-hover text-white">New Account</Link>
                <Link to='/' className="link link-hover text-white">Start Booking a Room</Link>
            </div>
            <div>
                <span className="footer-title drop-shadow-[0_6px_6px_#352360]">Connect Us</span>
                <span className="link link-hover text-white">EO Bozz</span>
                <a className="link link-hover text-white" href='mail.google.com'>eobozz01@gmail.com</a>
                <span className="text-white">EO Bozz, Jakarta</span>
            </div>
        </footer>

    )
}

export default Footer