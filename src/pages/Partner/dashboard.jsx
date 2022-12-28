import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/LayoutAdmin'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { formatCurrency } from '../../utils/formatCurrency'
import { apiWithAuth } from '../../services/api'
import { useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
import axios from 'axios'

const Dashboard = () => {
    const [status, setStatus] = useState()
    const [logs, setLogs] = useState(['register', 'waiting for verify', 'revision with note'])
    const [listServices, setListServices] = useState('')
    const [listAdditional, setListAdditional] = useState('')
    const serviceHead = ['no', 'package name', 'package price', 'package category', 'action']
    const additionalHead = ['no', 'additional name', 'additional price']
    const [active, setActive] = useState('service')
    const [cookie, setCoookie] = useCookies()
    const token = cookie.token

    // const getDataPartner = async () => {
    //     await axios.get(`https://irisminty.my.id/${cookie.id}`, {
    //         headers: { Authorization: `Bearer ${cookie.token}` },
    //     })
    // }

    const navigate = useNavigate()
    const getListServices = () => {
        const services = [
            {
                id: 1,
                package_name: 'Wedding Package',
                package_price: 12000000,
                package_category: 'wedding',
            },
            {
                id: 2,
                package_name: 'Wedding Package',
                package_price: 12000000,
                package_category: 'wedding',
            },
            {
                id: 3,
                package_name: 'Wedding Package',
                package_price: 12000000,
                package_category: 'wedding',
            },
        ]

        setListServices(services)
    }
    const getListAdditionals = async() => {
        // Masih get All Additional belum by ID
        apiWithAuth(`additionals`, `GET`, null,"application/json", token)
        .then(res => setListAdditional(res.data))
        .catch(err => console.log(err))
    }
    
    const goEdit = (id) => {
        navigate('/partner/edit-service', {
            state: { id: id }
        })
    }
    const goEditAdd = (data) => {
        navigate('/partner/edit-additional', {
            state: { data: data }
        })
    }

    const deleteAdditional = (id) => {
        apiWithAuth(`additionals/${parseInt(id)}`, `DELETE`,null, "application/json",token)
        .then(res => {
            Swal.fire({
                title: "Success Delete additional.",
                icon: "success",
                confirmButtonColor: "#533e85",
                confirmButtonText: "Oke",
              })
              getListAdditionals()
              console.log(res.data)
        })
        .catch(err => {
            Swal.fire({
                position : "center",
                icon : "error",
                title : `${err.response.data.message}`,
                showConfirmButton : true
            })
        })
    }
    useEffect(() => {
        // getDataPartner()
        setStatus('verify')
        getListServices()
        getListAdditionals()
    }, [])
    return (
        <LayoutAdmin>
            {status === 'not verify' &&
                <div>
                    <h1 className='text-xl font-bold text-bozz-one mb-5 border border-bozz-one p-5 rounded-xl'>Account Not Verify Yet</h1>
                    <h1 className='text-xl font-bold text-bozz-one'>Verify Progress</h1>
                    <ul className="steps steps-vertical">
                        {logs?.map((log, index) => {
                            return <li className="step step-primary text-bozz-one capitalize">
                                <span>{log}
                                    {log === 'revision with note' ? <a className='text-bozz-two font-bold underline'> Link Revisi</a> : ''}
                                </span>
                            </li>
                    })}
                </ul>
            </div>
        }
        {status === 'verify' && listServices === '' ? 
            <div className='flex flex-col mt-3'>
                <button className='bg-bozz-two text-bozz-six h-8 py-0 rounded-lg mb-5 self-end' onClick={() => navigate('/partner/add-service')}> Add New Service</button>
                <h1 className='text-xl font-bold text-bozz-one mb-5 border border-bozz-one p-5 rounded-xl'>List Services Not Add Yet</h1>
            </div> 
        : null
        }
        {status === 'verify' && listServices !== '' ? 
            <div className='flex flex-col mt-3'>
                {active == 'service' ? 
                    <button className='bg-bozz-two text-bozz-six h-8 py-0 px-8 rounded-lg mb-5 self-end' onClick={() => navigate('/partner/add-service')}> Add New Service</button>
                    : <button className='bg-bozz-two text-bozz-six h-8 py-0 px-8 rounded-lg mb-5 self-end' onClick={() => navigate('/partner/add-additional')}> Add New Additional</button>
                }   
                <div className='flex'>
                    <div 
                        className={`w-40 text-sm h-8 text-center py-2 ${active == 'service' ? `bg-bozz-two text-white font-semibold` : `bg-bozz-six border border-bozz-two text-bozz-two font-semibold`}`}
                        onClick={() => setActive('service')}>List Services</div>
                    <div 
                        className={`w-40 text-sm h-8  text-center py-2 ${active != 'service' ? `bg-bozz-two  text-white font-semibold` : `bg-bozz-six border border-bozz-two text-bozz-two font-semibold`}`}
                        onClick={() => setActive('additional')}
                        >List Additionals</div>
                    </div>
                    {active == 'service'
                        ?
                        <div className='p-5 bg-white rounded-lg'>
                            <table className='w-full table-auto'>
                                    <thead className='border-b-2 border-bozz-one'>
                                        <tr className='text-center'>
                                            {serviceHead?.map((title,index) => {
                                                return <td className='text-bozz-three font-semibold capitalize' key={index}>{title}</td>
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {listServices.map((data, index) => {
                                        return (
                                            <tr className='text-bozz-three border-b-2 border-bozz-three h-12 text-center py-10' key={index}>
                                                <td>{index + 1}</td>
                                                <td>{data.package_name}</td>
                                                <td>{formatCurrency(data.package_price)}</td>
                                                <td>{data.package_category}</td>
                                                <td className='flex justify-evenly items-center py-3 text-lg'>
                                                    <FaEdit className='text-bozz-two' onClick={() => goEdit(data.id)} />
                                                    <FaTrashAlt className='text-red-400' />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        : <div className='p-5 bg-white rounded-lg'>
                            <table className='w-full table-auto'>
                                <thead className='border-b-2 border-bozz-three'>
                                    <tr className='text-center'>
                                        {additionalHead?.map((title,index) => {
                                            return <th className='text-bozz-three font-semibold capitalize' key={index}>{title}</th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {listAdditional && listAdditional?.map((data, index) => {
                                        return (
                                            <tr className='text-bozz-three border-b-2 border-bozz-three h-10 text-center' key={index}>
                                                <td>{index + 1}</td>
                                                <td>{data.additional_name}</td>
                                                <td>{formatCurrency(data.additional_price)}</td>
                                                <td className='flex justify-evenly items-center py-3 text-lg'>
                                                    <FaEdit className='text-bozz-two' onClick={() => goEditAdd(data)}/>
                                                    <FaTrashAlt className='text-red-400' onClick={() => deleteAdditional(data.id)}/>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                    }
                </div> : null
            }
        </LayoutAdmin>
    )
}

export default Dashboard