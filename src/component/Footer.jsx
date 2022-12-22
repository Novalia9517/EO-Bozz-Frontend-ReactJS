import React from 'react'

const Footer = () => {
    return (

        <footer className="footer p-10 bg-eo-primary text-white mt-auto">
            <div className='flex ml-8'>
                <h1 className='italic'>EO Bozz</h1>
            </div>
            <div>
                <span className="footer-title">For Beginners</span>
                <a className="link link-hover text-white">New Account</a>
                <a className="link link-hover text-white">Start Booking a Room</a>
            </div>
            <div>
                <span className="footer-title">Explore Us</span>
                <a className="link link-hover text-white">Our Careers</a>
                <a className="link link-hover text-white">Privacy</a>
                <a className="link link-hover text-white">Terms & Conditions</a>
            </div>
            <div>
                <span className="footer-title">Connect Us</span>
                <a className="link link-hover text-white">support@stay.id</a>
                <a className="link link-hover text-white">021 - 2208 - 1996</a>
                <a className="link link-hover text-white">Stay, Ahmad Yani, Surabaya</a>
            </div>
        </footer>

    )
}

export default Footer