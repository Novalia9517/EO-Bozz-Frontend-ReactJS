import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const CardProduct = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className='text-lg'>Wedding Organizer</p>
                            <p className='flex mt-2 text-lg'><AiOutlineStar className='mt-1 mr-2' /> Average Rating</p>
                        </div>
                        <p className='mx-5 text-lg'>Idr 12.000.000</p>
                    </div>
                    <div className="card-actions mt-2">
                        <button className="btn bg-bozz-one">More Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct