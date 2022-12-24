import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { AiOutlineStar } from 'react-icons/ai'


const Rating = () => {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto px-10 py-10 justify-center'>
        <h1>Review Order</h1>
        <div className='py-5 p-5'>
          <div className='flex flex-col py-3'>
            <label className=''>
              Purchase Date
            </label>
            <input type="text" disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className='flex flex-col py-3'>
            <label>
              Package Name
            </label>
            <input type="text" disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className='flex flex-col py-3'>
            <label>
              Package Price
            </label>
            <input type="text" disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className='flex flex-col py-3'>
            <label>
              Event Date Start
            </label>
            <input type="text" disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className='flex flex-col py-3'>
            <label>
              Status
            </label>
            <input type="text" disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
        </div>
        <hr />
        <div className='py-5'>
          <h1>Berikan Rating untuk EO</h1>
          <div>
            <form className='py-3'>
              <label className='flex text-2xl'>Rating<AiOutlineStar className='mx-2 my-1' /></label>
              <input type="number" placeholder="1-10" className="input input-bordered w-full max-w-xs" />
              <label className='flex text-2xl py-5'>Berikan Feedback</label>
              <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"></textarea>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Rating