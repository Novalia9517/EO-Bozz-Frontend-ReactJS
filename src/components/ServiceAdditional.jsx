import React, { useState } from 'react'
import { formatCurrency } from '../utils/formatCurrency'

const ServiceAdditional = ({listAdditional, chooseAdd, onAdd, additional}) => {
    const [count, setCount] = useState(1)
  return (
    <>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box w-full h-96 relative py-10 px-5 h-auto bg-white text-bozz-one" htmlFor="">
                <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-5 top-5 bg-bozz-three">✕</label>
                <div className='flex justify-between flex-col h-full'>
                    <div>
                        <p className='text-md font-bold my-5'>ADD SERVICE ADDITIONAL</p>
                        <div className={`flex gap-10 ${count >= 1 ? `block` : `hidden`}`}>
                            <div className='w-[50%]'>
                                <label className="label mb-[-10px]">
                                    <span className="label-text text-sm text-bozz-one capitalize">Additional Name</span>
                                </label>
                                <select className="bg-bozz-five border border-bozz-one text-xs text-bozz-one h-10 rounded-lg w-full" onChange={chooseAdd}>
                                <option>Please choose one option</option>
                                {listAdditional && 
                                    listAdditional.map((item, index) => {
                                    return <option key={index} value={item.id} className='text-xs'>{item.additional_name}</option>
                                    })
                                }
                                </select>
                            </div>
                            <div className='w-[50%]'>
                            <label className="label mb-[-10px]">
                                    <span className="label-text text-sm text-bozz-one capitalize">Additional Price</span>
                                </label>
                                <div className='h-10 flex items-center py-3 w-full border border-bozz-one px-5 rounded-lg'>
                                {additional && additional?.map((item,i) => {
                                    return <p className='text-xs font-semibold' key={i}>{formatCurrency(item.additional_price)}</p>
                                })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                  {/* <div className={`flex gap-10 my-5 ${count >= 2 ? `block` : `hidden`}`}>
                    <select className="bg-bozz-five border border-bozz-one text-xs text-bozz-one h-10 rounded-lg w-full" onChange={(e) => chooseAdd(setAdditional2, e.target.value)}>
                    <option>Please choose one option</option>
                      {listAdditional && 
                        listAdditional.map((item, index) => {
                          return <option key={index} value={item.id} className='text-xs'>{item.additional_name}</option>
                        })
                      }
                    </select>
                    <div className='h-10 flex items-center py-3 w-full '>
                      {additional2 && additional2?.map((item,i) => {
                        return <p className='text-xs font-semibold' key={i}>{formatCurrency(item.additional_price)}</p>
                      })
                      }
                    </div>
                  </div>
                  <div className={`flex gap-10 ${count >= 3 ? `block` : `hidden`}`}>
                    <select className="bg-bozz-five border border-bozz-one text-xs text-bozz-one h-10 rounded-lg w-full" onChange={(e) => chooseAdd(setAdditional3, e.target.value)}>
                    <option>Please choose one option</option>
                      {listAdditional && 
                        listAdditional.map((item, index) => {
                          return <option key={index} value={item.id} className='text-xs'>{item.additional_name}</option>
                        })
                      }
                    </select>
                    <div className='h-10 flex items-center py-3 w-full '>
                      {additional3 && additional3?.map((item,i) => {
                        return <p className='text-xs font-semibold' key={i}>{formatCurrency(item.additional_price)}</p>
                      })
                      }
                    </div>
                  </div>
                  <p className={`${count > 3 ? `block` : `hidden`} text-red-500 text-xs font-semibold`}>Maksimal Addition 3</p> */}
                  <div className='flex justify-center mt-3'>
                    <button className='h-12 w-40 text-xs border rounded-md border-bozz-one flex justify-center items-center font-bold bg-bozz-five hover:bg-bozz-one hover:text-white' onClick={() => onAdd()}>Add Services Additional</button>
                  </div>
                </div>
            </label>
        </label>
        </>
  )
}

export default ServiceAdditional