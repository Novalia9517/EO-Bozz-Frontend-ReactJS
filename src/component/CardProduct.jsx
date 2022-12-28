import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { formatCurrency } from '../utils/formatCurrency'

const CardProduct = ({name, rating, price,click, company, city}) => {
    return (
        <div>
            <div className="card w-96 bg-bozz-six shadow-xl text-bozz-one">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <div className=''>
                        <div className='flex justify-between px-0 w-full'>
                            <p className='text-lg'>{name}</p>
                            <p className='mx-5 text-lg text-bozz-two font-bold'>{formatCurrency(price)}</p>
                        </div>
                        <p className='flex mt-2 text-lg'><AiFillStar className='mt-1 mr-2 text-orange-300' /> {rating} Rating</p>
                        <p className='flex mt-2 text-lg'>{company}</p>
                        <p className='flex mt-2 text-lg'>{city}</p>
                    </div>
                    <div className="card-actions mt-2">
                        <button className="btn bg-bozz-one" onClick={click}>More Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct