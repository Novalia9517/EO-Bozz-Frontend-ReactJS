import React from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'

const DashboardAdmin = () => {
  const tableHead = ['No', 'Company Name', 'Register Date', 'City', 'Status', 'Action']
  const datas = [
    {
      order_id : 1,
      company_name : 'Company Aceh',
      register_date : '12/12/2022',
      company_location : 'Jakarta',
      register_status : 'need verify'
    },
    {
      order_id : 2,
      company_name : 'Company Aceh',
      register_date : '12/12/2022',
      company_location : 'Jakarta',
      register_status : 'verify'
    },
    {
      order_id : 3,
      company_name : 'Company Aceh',
      register_date : '12/12/2022',
      company_location : 'Jakarta',
      register_status : 'verify'
    },
  ]
  
  return (
    <LayoutAdmin>
        <div className='mt-5 w-full h-full'>
          <h1 className='text-xl font-bold text-bozz-one mb-8'>List Register Partner</h1>
          <div className='p-5 bg-white rounded-lg'>
            <table className='w-full table-auto'>
              <thead className='border-b-2 border-bozz-two'>
                {tableHead.map((title,index) => {
                  return <th className='text-bozz-two font-semibold' key={index}>{title}</th>
                })}
              </thead>
              <tbody>
                {datas.map((data, index) => {
                  return (
                    <tr className='text-bozz-two border-b-2 border-bozz-two h-10 text-center' key={index}>
                      <td>{index + 1}</td>
                      <td>{data.company_name}</td>
                      <td>{data.register_date}</td>
                      <td>{data.company_location}</td>
                      <td>{data.register_status}</td>
                      <td>{data.register_status === 'need verify' ? <button className='w-24 h-8 bg-bozz-two text-bozz-six rounded-lg'>Verify</button> : '-'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

          </div>
        </div>
    </LayoutAdmin>
  )
}

export default DashboardAdmin