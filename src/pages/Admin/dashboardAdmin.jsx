import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/LayoutAdmin'

const DashboardAdmin = () => {
  const tableHead = ['No', 'Company Name', 'Register Date', 'City', 'Status', 'Action']
  const [partnerData, setPartnerData] = useState()
  const navigate = useNavigate()

  const onVerify = (id) => {
    navigate('/admin/verify-partner', {
      state: {
        id: id
      }
    })
  }

  const getDataPartner = async () => {
    await axios.get(`https://irisminty.my.id/partners`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
    })
      .then(res => {
        const data = res.data.data
        setPartnerData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getDataPartner()
  }, [])


  const datas = [
    {
      order_id: 1,
      company_name: 'Company Aceh',
      register_date: '12/12/2022',
      company_location: 'Jakarta',
      register_status: 'need verify'
    },
    {
      order_id: 2,
      company_name: 'Company Aceh',
      register_date: '12/12/2022',
      company_location: 'Jakarta',
      register_status: 'verify'
    },
    {
      order_id: 3,
      company_name: 'Company Aceh',
      register_date: '12/12/2022',
      company_location: 'Jakarta',
      register_status: 'verify'
    },
  ]

  return (
    <LayoutAdmin>
      <div className='mt-5 w-full h-full'>
        <h1 className='text-xl font-bold text-bozz-one mb-8'>List Register Partner</h1>
        <div className='p-5 bg-white rounded-lg'>
          <table className='w-full table-auto'>
            <thead className='border-b-2 border-bozz-two'>
              <tr>
                {tableHead.map((title, index) => {
                  return <th className='text-bozz-two font-semibold' key={index}>{title}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {partnerData ? (
                
                  partnerData.map((data, index) => {
                    return (
                      <tr className='text-bozz-two border-b-2 border-bozz-two h-10 text-center' key={index}>
                        <td>{index + 1}</td>
                        <td>{data.company_name}</td>
                        <td>{data.company_phone}</td>
                        <td>{data.company_city}</td>
                        <td>{data.verification_status}</td>
                        <td>{data.verification_status === "Not Verified" ?
                          <button className='w-24 h-8 text-center py-0 bg-bozz-two text-bozz-six rounded-lg hover:bg-bozz-three hover:scale-110' onClick={()=> onVerify(data.id)}>Verify</button>
                          : '-'}
                        </td>
                      </tr>
                    )
                  })
                
              ):<></>}
              
            </tbody>
          </table>

        </div>
      </div>
    </LayoutAdmin>
  )
}

export default DashboardAdmin