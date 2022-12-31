import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/LayoutAdmin'

const DashboardAdmin = () => {
  const tableHead = ['No', 'Company Name', 'Register Date', 'PIC Name', 'Status', 'Action']
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
    await axios.get(`https://irisminty.my.id/partners/register`, {
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
                        <td>{data.register_date.slice(0,10)}</td>
                        <td>{data.pic_name}</td>
                        <td>{data.verification_status}</td>
                        <td>{data.verification_status === "Not Verified" || data.verification_status === "Revision" ?
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