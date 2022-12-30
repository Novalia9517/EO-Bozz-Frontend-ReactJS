import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import Loading from '../../components/Loading'
import { apiWithAuth } from '../../services/api'

const Discussion = () => {
    const token = localStorage.getItem('userToken')
    const partnerId = localStorage.getItem('partner_id')
    const [myDiscussions, setMyDisscussion] = useState()
    const getDiscussions = async() => {
        apiWithAuth(`discussions`, `GET`, null, "application/json")
        .then(res => setMyDisscussion(res.data.filter(item => item.partner_id == partnerId )))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getDiscussions()
    },[])

    // console.log(myDiscussions)
  return (
    <>
    {myDiscussions? 
        <LayoutAdmin>
            <h4 className='text-bozz-one text-lg font-semibold'>Discussion</h4>
            {myDiscussions && myDiscussions.length >= 1 ?
                myDiscussions?.map((item, index) => {
                    return <div className='flex flex-col justify-between' key={index}><div className='h-16 w-full p-3 rounded-lg shadow text-bozz-one border border-bozz-one bg-bozz-six'>
                        <p>{item.comment}</p>
                        </div>
                        <div className='flex h-12 bg-bozz-six border border-bozz-one'>
                            <input type={'text'} className='text-bozz-one px-3 text-xs bg-bozz-six w-full'/>
                            <button className='bg-bozz-one flex justify-center items-center w-16 h-12'>Send</button>
                        </div>
                        </div>
                })
                : <p className='text-md font-semibold text-bozz-one'>Belum Ada diskusi</p>
            }
        </LayoutAdmin>
    : <Loading/>
    }
    </>
  )
}

export default Discussion