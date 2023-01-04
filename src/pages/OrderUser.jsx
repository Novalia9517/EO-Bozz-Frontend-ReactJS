import React,{useEffect, useState} from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import Row from '../components/Row'
import { formatCurrency } from '../utils/formatCurrency'
import Loading from '../components/Loading'

const OrderUser = () => {
    const location = useLocation()
    const [clientName,setClientName] = useState()
    const [eventName, setEventName] = useState()
    const [eventLocation, setEventLocation] = useState()
    const [eventAddress, setEventAddress] = useState()
    const [note, setNote] = useState()
    const [num, setNum] = useState(0);
    const allCity = JSON.parse(localStorage.getItem('city'))
    const startDate = location?.state?.startDate
    const endDate = location?.state?.endDate
    const additional = location?.state?.additional
    const serviceId = location?.state?.serviceId
    const [additionalArr, setAdditionalArr] = useState([])
    const [qty, setQty] = useState(0)
    // const [arr, setArr] = useState([])
    let arr = [], qtyAdd = []
    // const [qtyAdd, setQtyAdd] = useState([])
   

    console.log('qty', qty)

    const incNum = (i) => {
        arr = additionalArr
        arr[i].qty = arr[i].qty+1
        // qtyAdd[i] = arr[i].qty
        setAdditionalArr(arr)
        console.log(additionalArr)
        // console.log(qtyAdd)
    };
    const decNum = (i) => {
        arr = additionalArr
        if (arr[i].qty > 0) {
            return arr[i].qty = arr[i].qty-1
            // qtyAdd[i] = arr[i].qty
        }
        setAdditionalArr(arr)
        console.log(additionalArr)
        // console.log(qtyAdd)
    }

    const getAdditionalArr = () => {
        additional?.map((item, i) => {
            arr[i] = {
                service_additional_id : item.service_additional_id,
                qty : 0
               },
              qtyAdd[i] = arr[i].qty
        })
        return setAdditionalArr(arr)
    }
    const navigate = useNavigate()

    const onPayment = () => {
        const data = {
            startDate: startDate,
            endDate : endDate,
            clientName: clientName,
            eventName: eventName,
            eventLocation: eventLocation,
            eventAddress: eventAddress,
            note: note,
            serviceId : serviceId,
            additional : additional,
            additionalArr : additionalArr
        }
        navigate('/payment', {
            state: {data: data}
            // {
                // startDate: startDate,
                // endDate : endDate,
                // clientName: clientName,
                // eventName: eventName,
                // eventLocation: eventLocation,
                // eventAddress: eventAddress,
                // note: note
            // }
        })
    }

    useEffect(() => {
        getAdditionalArr()
    },[])

    // console.log(arr)
    console.log(additionalArr)
    console.log(additional)
    // console.log(arr)
    // console.log(qtyAdd)
    return (
        <>
        {additional && additionalArr ?
        <div className='bg-bozz-six text-bozz-one'>
            <Navbar />
            <div className='container mx-auto px-10 py-10'>
                <h1 className='text-4xl text-center'>Your Order</h1>
                {/* <form> */}
                    <p className='underline text-bozz-one'>Fill the form for your order !</p>
                    <div className='grid grid-cols-2 lg:grid-cols-2'>
                        <div>
                            <div className='flex flex-col py-1'>
                                <label className='font-semibold'>
                                    Start Date
                                </label>
                                <p className='text-xl font-bold text-bozz-two'>{startDate}</p>
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className=''>
                                    Client Name
                                </label>
                                <input onChange={(e) => setClientName(e.target.value)} required type="text" className="input border border-bozz-one bg-bozz-six w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-1'>
                                <label>
                                    Event Name
                                </label>
                            <input onChange={(e) => setEventName(e.target.value)} required type="text" className="input border border-bozz-one  bg-bozz-six w-full max-w-md" />
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className=''>
                                    Note For EO
                                </label>
                            <textarea onChange={(e) => setNote(e.target.value)} className="textarea border border-bozz-one h-24 resize-none bg-bozz-six w-full max-w-md" placeholder="Bio"></textarea>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col py-1'>
                                <label className='font-semibold'>
                                    End Date
                                </label>
                                <p className='text-xl font-bold text-bozz-two'>{endDate}</p>
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className=''>
                                    Event Location
                                </label>
                                <select 
                                className="bg-bozz-five border border-bozz-one text-xs text-bozz-one h-10 rounded-lg w-full max-w-md"
                                id='companycity' onChange={(e) => setEventLocation(e.target.value) }
                                >
                                <option>Choose City</option>
                                    {allCity && 
                                        allCity?.map((item, index) => {
                                        return <option key={index} value={item.city_name} className='text-xs'>{item.city_name}</option>
                                    })
                                    }
                            </select>
                            {/* <input onChange={(e) => setEventLocation(e.target.value)} type="text" className="input border border-bozz-one  bg-bozz-six w-full max-w-md" /> */}
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className=''>
                                    Event Address
                                </label>
                            <input onChange={(e) => setEventAddress(e.target.value)} type="text" className="input border border-bozz-one  bg-bozz-six w-full max-w-md" />
                            </div>
                        </div>
                    </div>

                    <div className='py-10'>
                        <h1 className='text-3xl'>Service Detail</h1>
                        <div className='py-10 border rounded-md w-full border-bozz-one px-10'>
                            <div className='flex juastify-between'>
                                <p className='text-lg font-bold w-[30%]'>Service Name</p>
                                <p className='w-8'>:</p>
                                <p className='text-lg font-bold'>{serviceId.service_name}</p>
                            </div>
                            <div className='flex juastify-between my-3'>
                                <p className='text-lg font-bold w-[30%]'>Service Price</p>
                                <p className='w-8'>:</p>
                                <p className='text-lg font-bold'>{formatCurrency(serviceId.service_price)}</p>
                            </div>
                            <div className='flex juastify-between'>
                                <p className='text-lg font-bold w-[30%]'>Additionals</p>
                                <p className='w-8'>:</p>
                                <p className='text-lg font-bold'></p>
                            </div>
                            <div className='pl-10'>
                                {/* {additional?.map((item,i) => {
                                    return (
                                        <div className='flex my-3'>
                                        <p className='text-lg font-bold w-[30%]'>{item.additional_name}</p>
                                        <p className='w-8'>:</p>
                                        <p className='text-lg font-bold w-40'>{formatCurrency(item.additional_price)}</p>
                                        <div className='flex w-40'>
                                            <button onClick={decNum} className='h-8 w-8 flex justify-center items-center rounded border border-bozz-one hover:bg-bozz-one hover:text-white'>-</button>
                                            <input value={num} className='text-lg px-2 border-b-2 border-bozz-one h-8 w-8 text-center bg-white' />
                                            <button onClick={incNum} className='h-8 w-8 flex justify-center items-center rounded border border-bozz-one hover:bg-bozz-one hover:text-white'>+</button>
                                        </div>
                                        <p className='text-lg font-bold text-right'>{formatCurrency(item.additional_price * num)}</p>
                                    </div>
                                    )
                                })} */}
                                {additional && additionalArr ?
                                    additional.map((item,i) => {
                                    // let qty = arr[i].qty
                                    console.log(`Quantity ke ${i}`,additionalArr[i]?.qty)
                                    return (
                                        <div className='flex my-3'>
                                        <p className='text-lg font-bold w-[30%]'>{item.additional_name}</p>
                                        <p className='w-8'>:</p>
                                        <p className='text-lg font-bold w-40'>{formatCurrency(item.additional_price)}</p>
                                        <div className='flex w-40'>
                                            <button onClick={() => decNum(i)} className='h-8 w-8 flex justify-center items-center rounded border border-bozz-one hover:bg-bozz-one hover:text-white'>-</button>
                                            <input value={additionalArr[i]?.qty} className='text-lg px-2 border-b-2 border-bozz-one h-8 w-8 text-center bg-white' />
                                            <button onClick={() => incNum(i)} className='h-8 w-8 flex justify-center items-center rounded border border-bozz-one hover:bg-bozz-one hover:text-white'>+</button>
                                        </div>
                                        {/* <p>{qtyAdd[i]}</p> */}
                                        <p className='text-lg font-bold text-right'>{formatCurrency(item.additional_price * additionalArr[i]?.qty)}</p>
                                    </div>
                                    )
                                }) : <p>Tidak Ada Additional Untuk Service Ini</p>
                            }
                            </div>

                        </div>
                            <div className='flex justify-end  mt-4'>
                                <button className='btn hover:btn-warning bg-orange-400 mx-2 text-white'>Cancel</button>
                                <button className='btn bg-bozz-one hover:bg-bozz-two text-white' onClick={() => onPayment()}>Order</button>
                            </div>
                    </div>
                {/* </form> */}
            </div>
            <Footer />
        </div>
        : <Loading/>
        }
        </>
    )
}

export default OrderUser