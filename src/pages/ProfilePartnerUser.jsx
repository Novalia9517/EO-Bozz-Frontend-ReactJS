import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { FaEdit } from 'react-icons/fa'
import Picprofile from '../assets/profile.png'
import Dummy from '../assets/HomeImage.png'
import CardProduct from '../component/CardProduct'
import Art from '../assets/art.png'
import { useNavigate } from 'react-router-dom'

const ProfilePartnerUser = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/detail')
    }
    return (
        <div className='bg-bozz-six text-bozz-one'>
            <Navbar />
            <div className='container mx-auto px-10 py-10'>
                <div className='flex justify-center'>
                    <img src={Art} className='h-32 w-32 rounded-full border border-bozz-one'/>
                    <div className='ml-10'>
                        <h1 className='text-3xl my-3 font-bold'>Nama Partner</h1>
                        <p className='text-xl flex'>Companny address</p>
                        <p className='text-md flex'>Link Website</p>
                    </div>
                </div>
                <div className='flex justify-center my-8'>
                    <div className='px-10 mx-5 border border-bozz-one rounded-md '>
                        <p className='text-xl text-center'>
                            <span className='font-semibold'>4.8</span><br />
                            <span className='text-sm'>Average Rating</span>
                        </p>
                    </div>
                    <div className='px-10 mx-5 border border-bozz-one rounded-md '>
                        <p className='text-xl text-center'>
                            <span className='font-semibold'>120</span><br />
                            <span className='text-sm'>Total Event</span>
                        </p>
                    </div>
                </div>
                <div className="divider bg-bozz-one h-0.5"></div> 
                <div className='text-center my-5'>
                    <div className="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full">
                                <div className="hero h-96" style={{ backgroundImage: `url(${Art})` }}>
                                <div className="hero-overlay bg-opacity-50"></div>
                                <div className="hero-content text-center text-neutral-content text-bozz-two">
                                    <div className="max-w-md text-bozz-six">
                                    <h1 className='text-xl font-bold mb-16'>EVENT YANG PERNAH KAMI TANGANI </h1>
                                    <h1 className='text-xl font-bold mb-3'>Wedding Event Siapa </h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    </div>
                                </div>
                                </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero h-96" style={{ backgroundImage: `url(${Art})` }}>
                                <div className="hero-overlay bg-opacity-50"></div>
                                <div className="hero-content text-center text-neutral-content text-bozz-two">
                                    <div className="max-w-md text-bozz-six">
                                    <h1 className='text-xl font-bold mb-16'>EVENT YANG PERNAH KAMI TANGANI </h1>
                                    <h1 className='text-xl font-bold mb-3'>Wedding Event Siapa </h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    </div>
                                </div>
                                </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero h-96" style={{ backgroundImage: `url(${Art})` }}>
                                <div className="hero-overlay bg-opacity-50"></div>
                                <div className="hero-content text-center text-neutral-content text-bozz-two">
                                    <div className="max-w-md text-bozz-six">
                                    <h1 className='text-xl font-bold mb-16'>EVENT YANG PERNAH KAMI TANGANI </h1>
                                    <h1 className='text-xl font-bold mb-3'>Wedding Event Siapa </h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    </div>
                                </div>
                                </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="divider bg-bozz-one h-0.5"></div> 
                <div className>
                    <h1 className='text-2xl font-bold text-center'>LIST SERVICE</h1>
                    <div className='grid gird-cols-2 lg:grid-cols-3 mt-5'>
                        <CardProduct name='Package A' rating='3.8' price={12000000} click={onClick} company='Company A' city='Jakarta'/>
                        <CardProduct name='Package A' rating='3.8' price={12000000} click={onClick} company='Company A' city='Jakarta'/>
                        <CardProduct name='Package A' rating='3.8' price={12000000} click={onClick} company='Company A' city='Jakarta'/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePartnerUser