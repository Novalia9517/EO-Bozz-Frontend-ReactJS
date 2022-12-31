import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import imgHome from '../assets/HomeImage.png'
import CardHome from '../component/CardHome'
import CardProduct from '../component/CardProduct'
import Footer from '../component/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { apiWithAuth } from '../services/api'
import { data } from 'autoprefixer'

const Home = () => {

    const [data_service, setDataService] = useState()
    const [city,setCity] = useState()
    const [searchCategory,setSearchCategory] = useState()
    const [searchCity, setSearchCity] = useState()
    const [listCompany, setListCompany] = useState()

    const navigate = useNavigate()

    const getDataService = async () => {
        await axios.get(`https://irisminty.my.id/services`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
        })
            .then(res => {
                const data = res.data.data
                // console.log(data)
                setDataService(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getCity = async () => {
        await axios.get(`https://irisminty.my.id/city`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
        })
            .then(res => {
                const data = res.data.data
                setCity(data)
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

    const getCompany = async() => {
        apiWithAuth(`partners`, `GET`, null, "application/json", localStorage.getItem('userToken'))
        .then(res => setListCompany(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getDataService()
        getCompany()
        getCity()
        // console.log('this', data_service)
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
                {data_service ? (
                    <CardHome
                        dataCategory={data_service}
                        dataCity={city}
                        searchCategory={(e) => setSearchCategory(e.target.value)}
                        searchCity={(e) => setSearchCity(e.target.value)}
                    />
                ): <></>}
            </div>
            <div className='container mx-auto px-5 py-5 '>
                <div className='grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-'>
                    {data_service ? (data_service.map((item) => {
                        let compName = ''
                        listCompany?.map((company,i) => {
                            if(company.id == item.partner_id) compName = company.company_name
                        })
                        return (
                            <CardProduct
                                img={item.service_image_file}
                                name={item.service_name}
                                rating={item.average_rating}
                                price={item.service_price}
                                click={() => onDetail(item.id)}
                                company={compName} 
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