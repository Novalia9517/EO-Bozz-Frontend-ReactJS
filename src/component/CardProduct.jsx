import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { formatCurrency } from '../utils/formatCurrency'

const CardProduct = ({ name, rating, price, click, company, city }) => {
    return (
        <div>
            <div className="card w-96 bg-bozz-six shadow-xl text-bozz-one">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <p className='text-md text-center mt-2'>{name}</p>
                <div className="card-body items-center text-left">
                    <div className='grid lg:grid-cols-2'>
                        <div className='my-2'>
                            <p className='flex  text-md'><AiFillStar className='mt-1 mr-2 text-orange-300' /> {rating} Rating</p>
                            <p className='mx-5 text-md text-bozz-two font-bold'>{formatCurrency(price)}</p>
                        </div>
                        <div className='mx-2 my-2'>
                            <p className='text-md'>{company}</p>
                            <p className='text-md'>{city}</p>
                        </div>
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