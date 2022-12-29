import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { formatCurrency } from '../utils/formatCurrency'

const CardProduct = ({ img, name, rating, price, click, company, city }) => {
    return (
        <div>
            <div className="card w-96 bg-bozz-six shadow-xl text-bozz-one mx-3">
                <figure className="px-10 pt-10 h-56">
                    <img src={img} alt="Service Image" className="rounded-xl h-full" />
                </figure>
                <p className='text-md text-center mt-2'>{name}</p>
                <div className="card-body items-center text-left">
                    <div className='grid lg:grid-cols-2'>
                        <div className='my-2'>
                            <p className='flex  text-md'><AiFillStar className='mt-1 mr-2 text-orange-300' /> {rating} Rating</p>
                            <p className='text-md'>{company}</p>
                        </div>
                        <div className='mx-2 my-2'>
                            <p className='text-md text-bozz-two font-bold'>{formatCurrency(price)}</p>
                            <p className='text-sm my-1'>{city}</p>
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