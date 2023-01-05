import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const About = () => {
  return (
    <div className='min-h-screen w-screen bg-white flex justify-between flex-col'>
        <Navbar/>
        <div className='flex justify-center mt-8'>
            <div className='p-10 text-bozz-one w-96 border border-bozz-one rounded-lg shadow-xl'>
                <h1 className='text-2xl font-bold '>About Us</h1>
                <p><span className='span font-bold text-bozz-three drop-shadow-[1px_1px_1px_purple] mr-2'>EO-BOZZ</span> is a website to bring together clients and EOs. Become an intermediary between EOs and customers who need their services by shortening their time in finding EOs that suit their needs and tastes, making suitable price offers and making decisions.</p>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About