import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/LayoutAdmin'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { formatCurrency } from '../../utils/formatCurrency'
import { apiWithAuth } from '../../services/api'
import { useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../store/features/userSlice'
import ServiceAdditional from './ServiceAdditional'

const Dashboard = () => {
    const [status, setStatus] = useState()
    const [logs, setLogs] = useState()
    const [listServices, setListServices] = useState()
    const [listAdditional, setListAdditional] = useState([])
    const serviceHead = ['no', 'package name', 'package price', 'package category','rating', 'additional', 'action']
    const additionalHead = ['no', 'additional name', 'additional price']
    const [active, setActive] = useState('service')
    // const [additional, setAdditional] = useState()
    // const [idAdditional, setIdAdditional] = useState()
    // const [addArr, setAddArr] = useState([])
    // const [descArr, setDescArr] = useState([])
    const [cookie, setCoookie] = useCookies()
    const token = localStorage.getItem('userToken')
    const partnerId = localStorage.getItem('partner_id')
    const dispatch = useDispatch();
    const currentUsers = useSelector((state) => state.users.currentUser)

    const getDataPartner = async () => {
        await axios.get(`https://irisminty.my.id/partners/${localStorage.getItem('partner_id')}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
        })
            .then(res => {
                const data = res.data.data
                dispatch(updateUser(data));
                setStatus(data.verification_status)
                // setStatus('Verify')
                setLogs(data.verification_log.split('\n'))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const navigate = useNavigate()
    const getListServices = () => {
        apiWithAuth(`partners/services`, `GET`, null,"application/json", token)
        .then(res => {
            setListServices(res.data)
        })
        .catch(err => console.log(err))

    }
    const getListAdditionals = async () => {
        apiWithAuth(`partners/additionals`, `GET`, null,"application/json", token)
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
    // const addServiceAdditional = (serviceId) => {
    //     const body = {
    //         service_id: parseInt(serviceId),
    //         additionals: addArr
    //     }
    //     console.log(body)
    //     apiWithAuth(`services/additionals`, `POST`, body, "application/json", token)
    //     .then(res => {
    //         Swal.fire({
    //             title: "Success Add Service Additional",
    //             icon: "success",
    //             confirmButtonColor: "#533e85",
    //             confirmButtonText: "Oke",
    //           })
    //           setAddArr([])
    //           descArr([])
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         Swal.fire({
    //             title: "Add service Additional Failed, try again!",
    //             icon: "error",
    //             confirmButtonColor: "#533e85",
    //             confirmButtonText: "Oke",
    //           })
    //     })
    // }
    // const chooseAdd = (choose,value) => {
    //     const filterAdd = listAdditional.filter(item => item.id == value)
    //     choose(filterAdd)
    //     setIdAdditional(value)
    //     // setAddArr([...addArr, filterAdd])
       
    //     // console.log(addArr)
    //     console.log(idAdditional)
    //     console.log(additional)
    //   }
    // const addToArr = () => {
    //     setAddArr([...addArr, {
    //         additional_id: parseInt(idAdditional)
    //     },])
    //     setDescArr([...descArr, additional[0]])
    //     console.log(addArr)
    //     console.log(descArr)
    // }
    const deleteService = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#17345f",
            confirmButtonText: "Yes, sure",
            cancelButtonColor: "#F47522",
            cancelButtonText: "Not now",
        }).then((result) => {
            if (result.isConfirmed) {
                apiWithAuth(`services/${parseInt(id)}`, `DELETE`,null, "application/json",token)
                .then(res => {
                    Swal.fire({
                        title: "Success Delete Service.",
                        icon: "success",
                        confirmButtonColor: "#533e85",
                        confirmButtonText: "Oke",
                      })
                      getListServices()
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
        });
    }
    const deleteAdditional = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#17345f",
            confirmButtonText: "Yes, sure",
            cancelButtonColor: "#F47522",
            cancelButtonText: "Not now",
        }).then((result) => {
            if (result.isConfirmed) {
                apiWithAuth(`additionals/${parseInt(id)}`, `DELETE`,null, "application/json",token)
                .then(res => {
                    Swal.fire({
                        title: "Success Delete Service.",
                        icon: "success",
                        confirmButtonColor: "#533e85",
                        confirmButtonText: "Oke",
                      })
                      getListServices()
                    //   console.log(res.data)
        
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
        });
    }
    const serviceDetail = (id) => {
        navigate('/detail', {
            state: {
                id: id
            }
        })
    }
    const onAddServiceAdditional = (serviceId, serviceName) => {
        navigate('/partner/add-service-additional', {
            state : {
                serviceId : serviceId,
                serviceName : serviceName,
                listAdditional : listAdditional
            }
        })
    }
    useEffect(() => {
        getDataPartner()
        getListServices()
        getListAdditionals()
        // console.log('this', currentUsers)
    }, [])

    // console.log(status)
    return (
        <LayoutAdmin>
            {status == 'Not Verified' || status == 'Revision' ?
                <div>
                    <h1 className='text-xl font-bold text-bozz-one mb-5 border border-bozz-one p-5 rounded-xl'>Account Not Verify Yet</h1>
                    <h1 className='text-xl font-bold text-bozz-one'>Verify Progress</h1>
                    <ul className="steps steps-vertical">
                        {logs?.map((log, index) => {
                            return <li className="step step-primary text-bozz-one capitalize">
                                <span>{log}
                                    { status == 'Revision' ? <Link to='/partner/revisi-registrasi' className='text-bozz-two font-bold underline'> Link Revisi</Link> : ''}
                                </span>
                            </li>
                    })}
                </ul>
            </div> : null
            }
            {status == 'Verified' && !listServices ? 
                <div className='flex flex-col mt-3'>
                    <button className='bg-bozz-two text-bozz-six h-8 py-0 px-8 rounded-lg mb-5 self-end' onClick={() => navigate('/partner/add-service')}> Add New Service</button>
                    <button className='bg-bozz-two text-bozz-six h-8 py-0 px-8 rounded-lg mb-5 self-end' onClick={() => navigate('/partner/add-additional')}> Add New Additional</button>
                    <h1 className='text-xl font-bold text-bozz-one mb-5 border border-bozz-one p-5 rounded-xl'>List Services Not Add Yet</h1>
                </div> 
            : null
            }
        {status == 'Verified' && listServices ? 
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
                                        {serviceHead?.map((title, index) => {
                                            return <td className='text-bozz-three font-semibold capitalize' key={index}>{title}</td>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {listServices.map((data, index) => {
                                        return (
                                            <tr className='text-bozz-three border-b-2 border-bozz-three h-12 text-center py-10' key={index}>
                                                <td>{index + 1}</td>
                                                <td><a onClick={() => serviceDetail(data.id)}>{data.service_name}</a></td>
                                                <td>{formatCurrency(data.service_price)}</td>
                                                <td>{data.service_category}</td>
                                                <td>{data.average_rating}</td>
                                                <td><button 
                                                    className='btn btn-xs border border-white w-14 h-6 bg-bozz-three hover:bg-bozz-two text-bozz-six rounded-lg text-[10px]' 
                                                    onClick={() => onAddServiceAdditional(data.id, data.service_name)}
                                                    >ADD</button></td>
                                                <td className='flex justify-evenly items-center py-3 text-lg'>
                                                    <FaEdit className='text-bozz-two' onClick={() => goEdit(data.id)} />
                                                    <FaTrashAlt className='text-red-400' onClick={() => deleteService(data.id)}/>
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
                                        {additionalHead?.map((title, index) => {
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
                                                    <FaEdit className='text-bozz-two' onClick={() => goEditAdd(data)} />
                                                    <FaTrashAlt className='text-red-400' onClick={() => deleteAdditional(data.id)} />
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