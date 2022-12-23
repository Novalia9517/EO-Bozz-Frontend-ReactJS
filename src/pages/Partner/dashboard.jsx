import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/LayoutAdmin'

const Dashboard = () => {
    const [status, setStatus] = useState()
    const [logs, setLogs] = useState(['register', 'waiting for verify', 'revision with note'])
    const navigate = useNavigate()

    useEffect(() => {
        setStatus('verify')
    })
  return (
    <LayoutAdmin>
        {status === 'not verify' ?
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
        : 
            <div className='flex flex-col mt-5'>
                <button className='bg-bozz-two text-bozz-six h-12 p-3 rounded-lg mb-5 self-end' onClick={() => navigate('/partner/add-service')}> Add New Service</button>
                <h1 className='text-xl font-bold text-bozz-one mb-5 border border-bozz-one p-5 rounded-xl'>List Services Not Add Yet</h1>
            </div>
        }
    </LayoutAdmin>
  )
}

export default Dashboard