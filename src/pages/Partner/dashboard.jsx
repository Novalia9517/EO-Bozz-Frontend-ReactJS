import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/LayoutAdmin'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const Dashboard = () => {
    const [status, setStatus] = useState()
    const [logs, setLogs] = useState(['register', 'waiting for verify', 'revision with note'])
    const [listServices, setListServices] = useState('')
    const [listAdditional, setListAdditional] = useState('')
    const serviceHead = ['no','package name', 'package price', 'package category', 'action']
    const additionalHead =  ['no','additional name', 'additional price']
    const [active, setActive] = useState('service')

    const navigate = useNavigate()
    const getListServices = () => {
        const services = [
            {
                package_name : 'Wedding Package',
                package_price : 12000000,
                package_category : 'wedding',
            },
            {
                package_name : 'Wedding Package',
                package_price : 12000000,
                package_category : 'wedding',
            },
            {
                package_name : 'Wedding Package',
                package_price : 12000000,
                package_category : 'wedding',
            },
        ]

        setListServices(services)
    }
    const getListAdditionals = () => {
        const additionals = [
            {
                additional_name : 'Wedding additional',
                additional_price : 12000000,
            },
            {
                additional_name : 'Wedding additional',
                additional_price : 12000000,
            },
            {
                additional_name : 'Wedding additional',
                additional_price : 12000000,
            },
        ]

        setListAdditional(additionals)
    }

    useEffect(() => {
        setStatus('verify')
        getListServices()
        getListAdditionals()
    },[])
  return (
    <LayoutAdmin>
        {status === 'not verify' &&
            <div>
                <h1 className='text-xl font-bold text-bozz-one mb-5 border border-bozz-one p-5 rounded-xl'>Account Not Verify Yet</h1>
                <h1 className='text-xl font-bold text-bozz-one'>Verify Progress</h1>
                <ul className="steps steps-vertical">
                    {logs?.map((log, index) => {
                        return  <li className="step step-primary text-bozz-one capitalize">
                            <span>{log}
                            {log === 'revision with note' ? <a className='text-bozz-two font-bold underline'> Link Revisi</a>: ''}
                            </span>
                            </li>
                    })}
                </ul>
            </div>
        }
        {status === 'verify' && listServices === '' ? 
            <div className='flex flex-col mt-3'>
                <button className='bg-bozz-two text-bozz-six h-8 px-8 rounded-lg mb-5 self-end' onClick={() => navigate('/partner/add-service')}> Add New Service</button>
                <h1 className='text-xl font-bold text-bozz-one mb-5 border border-bozz-one p-5 rounded-xl'>List Services Not Add Yet</h1>
            </div> 
        : null
        }
        {status === 'verify' && listServices !== '' ? 
            <div className='flex flex-col mt-3'>
                <button className='bg-bozz-two text-bozz-six h-8 px-8 rounded-lg mb-5 self-end' onClick={() => navigate('/partner/add-service')}> Add New Service</button>
                <div className='flex'>
                    <button 
                        className={`w-36 h-8 ${active == 'service' ? `bg-bozz-two text-white font-semibold` : `bg-bozz-six border border-bozz-two text-bozz-two font-semibold`}`}
                        onClick={() => setActive('service')}>List Services</button>
                    <button 
                        className={`w-36 h-8 ${active != 'service' ? `bg-bozz-two  text-white font-semibold` : `bg-bozz-six border border-bozz-two text-bozz-two font-semibold`}`}
                        onClick={() => setActive('additional')}
                        >List Additionals</button>
                </div>
                {active == 'service'
                    ?  
                        <div className='p-5 bg-white rounded-lg'>
                            <table className='w-full table-auto'>
                                    <thead className='border-b-2 border-bozz-one'>
                                        <tr>
                                            {serviceHead?.map((title,index) => {
                                                return <th className='text-bozz-three font-semibold capitalize' key={index}>{title}</th>
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {listServices.map((data, index) => {
                                        return (
                                        <tr className='text-bozz-three border-b-2 border-bozz-three h-12 text-center py-10' key={index}>
                                            <td>{index + 1}</td>
                                            <td>{data.package_name}</td>
                                            <td>{data.package_price}</td>
                                            <td>{data.package_category}</td>
                                            <td className='flex justify-evenly items-center py-3 text-lg'>
                                                <FaEdit className='text-bozz-two'/>
                                                <FaTrashAlt className='text-red-400'/>
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
                                {additionalHead?.map((title,index) => {
                                    return <th className='text-bozz-three font-semibold capitalize' key={index}>{title}</th>
                                })}
                                </thead>
                                <tbody>
                                {listAdditional?.map((data, index) => {
                                    return (
                                    <tr className='text-bozz-three border-b-2 border-bozz-three h-10 text-center' key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.additional_name}</td>
                                        <td>{data.additional_price}</td>
                                        <td  className='flex justify-evenly items-center py-3 text-lg'>
                                            <FaEdit className='text-bozz-two'/>
                                            <FaTrashAlt className='text-red-400'/>
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