import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import imgHome from '../assets/HomeImage.png'
import CardHome from '../component/CardHome'
import CardProduct from '../component/CardProduct'
import Footer from '../component/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [data_service, setDataService] = useState()

    const navigate = useNavigate()

    const getDataService = async () => {
        await axios.get(`https://irisminty.my.id/services`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
        })
            .then(res => {
                const data = res.data.data
                console.log(data)
                setDataService(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    // const onClick = () => {
    //     navigate('/detail')
    // }

    const onDetail = (id) => {
        navigate('/detail', {
            state: {
                id: id
            }
        })
    }

    useEffect(() => {
        getDataService()
        console.log('this', data_service)
    }, [])


    return (
        <div className='bg-bozz-six'>
            <Navbar />
            <hr className='text-black' />
            <div className='bg-bozz-one'>
                <div className='container mx-auto py-20 px-20 text-white flex'>
                    <div className='px-10 py-10'>
                        <h1 className=''>Event Organizer<br />Platform</h1>
                        <p>Agency provides a full service range including technical<br /> skills, design, business understanding.</p>
                        <button className='btn bg-[#EF6D58] my-10'>About Us</button>
                    </div>
                    <img className='mx-auto h-[320px]' src={imgHome} alt="home" width={500} />
                </div>
            </div>
            <div className='container mx-auto flex justify-center px-10 py-10'>
                <CardHome />
            </div>
            <div className='container mx-auto px-5 py-5 '>
                <div className='grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-'>
                    {data_service ? (data_service.map((item) => {
                        return (
                            <CardProduct
                                img={item.service_image_file}
                                name={item.service_name}
                                rating={item.average_rating}
                                price={item.service_price}
                                click={() => onDetail(item.id)}
                                company='Company A'
                                city={item.city} />
                        )
                    })
                    ) : <></>}

                </div>
                <div className="btn-group justify-center flex py-5">
                    <button className="btn btn-ghost">«</button>
                    <button className="btn btn-ghost">Page 22</button>
                    <button className="btn btn-ghost">»</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home