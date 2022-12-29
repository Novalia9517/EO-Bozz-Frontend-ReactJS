import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import imgHome from '../assets/HomeImage.png'
import Ceklist from '../assets/Vector.png'
import Plus from '../assets/plus.png'
import Footer from '../component/Footer'
import Loading from '../components/Loading'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { formatCurrency } from '../utils/formatCurrency'
import Art from '../assets/art.png'
import { askSchema } from '../validations/validations'
import { useFormik } from 'formik'
import { useCookies } from 'react-cookie'
import { apiWithAuth } from '../services/api'
import axios from 'axios'


const Detail = () => {
    const [serviceId, setServiceId] = useState()
    const [discussions, setDiscussion] = useState()
    const [detail, setDetail] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [available, setAvailable] = useState(false)
    const naviigate = useNavigate()
    const [cookie, setCookie] = useCookies()
    const location = useLocation();
    const id = location?.state?.id;

    const getDataId = async () => {
        await axios.get(`https://irisminty.my.id/services/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
        })
            .then(res => {
                const data = res.data.data
                setServiceId(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getDiscussion = async () => {
        await axios.get(`https://irisminty.my.id/discussions`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
        })
            .then(res => {
                const dataDiscussion = res.data.data
                console.log(dataDiscussion)
                setDiscussion(dataDiscussion)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onSubmit = () => {
        if (values.ask.length >= 10) {
            const body = {
                comment: values.ask,
                partner_id: parseInt(serviceId.partner_id),
                client_id: parseInt(cookie.id),
                service_id: parseInt(serviceId.id)
            }
            apiWithAuth(`discussions`, `POST`, body, "application/json", cookie.token)
                .then(res => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Question Send, wait for answer",
                        showConfirmButton: true,
                        timer: 1500,
                    });
                })
                .catch(err => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        text: "Question Not Send, Try Again",
                        showConfirmButton: true,
                        timer: 1500,
                    });
                })
        }
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            ask: '',
        },
        validationSchema: askSchema,
        onSubmit
    })

    const onCheck = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            text: "Date Available",
            showConfirmButton: true,
            timer: 1500,
        });
        setAvailable(true)
    }

    const onOrder = () => [
        naviigate('/orderuser', {
            state: { startDate: startDate, endDate: endDate }
        })
    ]
    useEffect(() => {
        getDiscussion()
        getDataId()
    }, [])
    return (
        <>
            {serviceId ?
                <div className='bg-bozz-six text-bozz-one'>
                    <Navbar />
                    <div className='container px-20 py-20 mx-auto'>
                        <div className='grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <img className='mx-auto h-[320px]' src={imgHome} alt="home" width={500} />
                            <div className='mx-auto text-bozz-one'>
                                <p className='py-3 px-3 font-bold text-xl'>{serviceId.service_name}</p>
                                <p className='py-3 px-3 font-bold text-xl text-bozz-two'>{formatCurrency(serviceId.service_price)}</p>
                                <p className=' px-3 text-lg text-[#726F6F]'>Category {serviceId.service_category}</p>
                                <p className=' px-3 text-lg text-[#726F6F] flex'><AiFillStar className='text-2xl text-orange-300' /> {serviceId.average_rating} Ratings</p>
                                <div>
                                    <p className='py-3 px-3 text-xl text-[#726F6F]'>Address</p>
                                    <p className='px-3 text-lg'>Jl. Cipto Mangunkusumo<br />
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
                                <h1 className='text-center text-4xl'>Additional</h1>
                                <div className='mt-5'>
                                    <p className='py-3 flex'><img src={Plus} width={20} /><span className='ml-5'>Catering 100 person - Rp 2.000.000 </span></p>
                                    <p className='py-3 flex'><img src={Plus} width={20} /><span className='ml-5'>Catering 100 person - Rp 2.000.000 </span></p>
                                    <p className='py-3 flex'><img src={Plus} width={20} /><span className='ml-5'>Catering 100 person - Rp 2.000.000 </span></p>
                                </div>
                            </div>
                            <div className='flex flex-col items-end mx-10 py-5'>
                                <div className='card w-96 h-full p-5 border-2 border-bozz-one flex flex-col'>
                                    <h1 className='text-center text-2xl font-semibold'>Check Availability Date</h1>
                                    <div className='flex justify-betweenw-full my-3 h-12 mb-10'>
                                        <div className='w-[50%]'>
                                            <p>Start Date</p>
                                            <input type="date" placeholder='stardate' name="stardate" id="stardate" className='bg-white text-bozz-one border-2 border-bozz-one w-full' onChange={(e) => setStartDate(e.target.value)} />
                                        </div>
                                        <div className='w-[50%]'>
                                            <p>End Date</p>
                                            <input type="date" name="enddate" id="enddate" className='bg-white border-2 text-bozz-one date:text-bozz-one border-bozz-one w-full' onChange={(e) => setEndDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <button className={`bg-bozz-one text-white h-11 rounded-lg ${available ? `hidden` : `block`}`} onClick={() => onCheck()}>Check Validate</button>
                                    <button className={`bg-bozz-one text-white h-11 rounded-lg ${available ? `block` : `hidden`}`} onClick={() => onOrder()}>Order Now</button>
                                    <p className={`text-center mt-5 text-bozz-one h-11 rounded-lg ${available ? `block` : `hidden`}`} onClick={() => setAvailable(false)}> Check Other Date</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='py-10 px-10 w-full'>
                            <p className='text-2xl text-[#023372]'>Tuliskan pertanyaanmu dibawah sini</p>
                            <textarea
                                value={values.ask} id='ask' type='text'
                                className={`textarea border ${errors.email && touched.email ? `border-red-700` : `border-bozz-one`} caret-text-bozz-one p-3 w-full h-24 resize-none bg-bozz-six text-bozz-one`} placeholder="Tuliskan pertanyaan"
                                onChange={handleChange} onBlur={handleBlur}
                            />
                            <div className='flex justify-center'>
                                <button className='btn bg-bozz-one w-min' type='submit' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                        <div>
                            {discussions ? (
                                discussions.map((item) => {
                                    return (
                                        <div className='px-10 py-10 border rounded-lg my-5'>
                                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                                <div className='px-2'>
                                                    <div className='flex'>
                                                        <img src={Art} className='w-12 h-12 rounded-full border border-bozz-one' />
                                                        <p className='px-4 text-2xl font-semibold'>Username<br /><span className='text-[#726F6F] text-lg'>{item.created_at}</span></p>
                                                    </div>
                                                    <p>{item.comment}</p>
                                                    <a className='py-3 cursor-pointer'>Balas</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : <></>}
                            <a className='flex  justify-center text-center cursor-pointer py-10'>Lihat lebih banyak</a>
                        </div>
                    </div>
                    <Footer />
                </div>
                : <Loading />
            }
        </>
    )
}

export default Detail