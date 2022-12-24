import React from 'react'
import Navbar from '../component/Navbar'
import imgHome from '../assets/HomeImage.png'
import profile from '../assets/profile.png'
import Ceklist from '../assets/Vector.png'
import Plus from '../assets/plus.png'
import Footer from '../component/Footer'


const Detail = () => {
    return (
        <div>
            <Navbar />
            <div className='container px-20 py-20 mx-auto'>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <img className='mx-auto h-[320px]' src={imgHome} alt="home" width={500} />
                    <div className='mx-auto'>
                        <h1 className='py-3 px-3'>Wedding package</h1>
                        <p className='py-3 px-3 text-2xl text-[#726F6F]'>Category EO</p>
                        <p className='py-3 px-3 text-2xl text-[#726F6F]'>Ratings 7.0</p>
                        <div>
                            <p className='py-3 px-3 text-2xl text-[#726F6F]'>Alamat</p>
                            <p className='px-3 text-1xl'>Jl. Cipto Mangunkusumo<br />
                                Gg. H. Mencong<br /> No. 3,
                                Sudimara Timur, Tangerang</p>
                        </div>
                    </div>
                </div>
                <div className='px-20 py-20 grid gap-10 grid-cols1 lg:grid-cols-2'>
                    <div className=''>
                        <h1 className='text-center text-4xl'>Description</h1>
                        <p className='py-10'>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='mx-auto'>
                        <h1 className='text-center text-4xl'>Included Service</h1>
                        <div className='mt-5'>
                            <p className='py-3 flex'><img src={Ceklist} width={20} /><span className='ml-5'>Wedding</span></p>
                            <p className='py-3 flex'><img src={Ceklist} width={20} /><span className='ml-5'>Wedding</span></p>
                            <p className='py-3 flex'><img src={Ceklist} width={20} /><span className='ml-5'>Wedding</span></p>
                        </div>

                    </div>
                </div>
                <div className='px-20 py-20 grid gap-10 grid-cols1 lg:grid-cols-2'>
                    <div className=''>
                        <h1 className='text-center text-4xl'>Description</h1>
                        <div className='mt-5'>
                            <p className='py-3 flex'><img src={Plus} width={20} /><span className='ml-5'>Catering 100 person - Rp 2.000.000 </span></p>
                            <p className='py-3 flex'><img src={Plus} width={20} /><span className='ml-5'>Catering 100 person - Rp 2.000.000 </span></p>
                            <p className='py-3 flex'><img src={Plus} width={20} /><span className='ml-5'>Catering 100 person - Rp 2.000.000 </span></p>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <h1 className='text-center text-4xl'>Check Availability Date</h1>
                        <div className='mt-5'>
                            <p className='text-2xl'>Start Date</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <p className='text-2xl'>End Date</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <button className='btn bg-bozz-one mt-1'>Check Availability</button>
                        </div>
                        <button className='btn bg-bozz-one mt-1'>Order Now !</button>
                    </div>
                </div>
                <hr />
                <div className='py-10 px-10'>
                    <p className='text-2xl text-[#023372]'>Tuliskan pertanyaanmu dibawah sini</p>
                    <textarea className="textarea textarea-bordered w-max" placeholder="Tuliskan pertanyaan"></textarea>\
                    <div className='flex'>
                        <button className='btn bg-bozz-one w-min'>Submit</button>
                        <p className='text-[#726F6F] px-5'>Maksimal 300Characters</p>
                    </div>
                </div>
                <div className='px-10 py-10 border rounded-lg'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='px-2'>
                            <div className='flex'>
                                <img src={profile} width={40} />
                                <p className='px-4 text-2xl'>Username<br /><span className='text-[#726F6F] text-lg'>12-12-2021</span></p>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.</p>
                            <a className='py-3 cursor-pointer'>Balas</a>
                        </div>
                        <div>
                            <div className='flex'>
                                <img src={profile} width={40} />
                                <p className='px-4 text-2xl'>Username<br /><span className='text-[#726F6F] text-lg'>12-12-2021</span></p>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.</p>
                            <a className='py-3 cursor-pointer'>Balas</a>
                        </div>
                    </div>
                    <a className='flex  justify-center text-center cursor-pointer py-10'>Lihat lebih banyak</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail