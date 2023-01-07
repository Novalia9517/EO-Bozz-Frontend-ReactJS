import React from 'react'
import Logo from '../assets/logo2.png'

const Footer = () => {
    return (

        <footer className="footer p-10 bg-bozz-one text-white mt-auto">
            <div className='flex ml-8 items-center'>
                <img src={Logo} className='w-16 align-center drop-shadow-[0_6px_6px_#352360]'/>
                <h1 className='italic'>EO Bozz</h1>
            </div>
            <div>
                <span className="footer-title">For Beginners</span>
                <a className="link link-hover text-white">New Account</a>
                <a className="link link-hover text-white">Start Booking a Room</a>
            </div>
            <div>
                <span className="footer-title">Connect Us</span>
                <a className="link link-hover text-white">EO Bozz</a>
                <a className="link link-hover text-white">021 - 2208 - 1996</a>
                <a className="link link-hover text-white">EO Bozz, Jakarta</a>
            </div>
        </footer>

    )
}

export default Footer