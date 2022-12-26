import React, { useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import { BiLeftArrow } from 'react-icons/bi'
import CustomInput from '../../components/CustomInput'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import { IoMdAdd} from 'react-icons/io'
import { Link } from 'react-router-dom'

const AddService = () => {
  let [step,setStep] = useState(1)
  let [tags, setTags] = useState([])

  const onAddTags = (e) => {
    if(e.key === 'Enter'){
      setTags([...tags, e.target.value])
      console.log(tags)
      e.target.value = ''
    }
  }
  const removeTags = (index) => {
    setTags(tags.filter((t,i) => i !== index))
  }
  return (
    <LayoutAdmin>
      <Link to='/partner/' className='text-bozz-one font-bold flex items-center mt-2'>
          <BiLeftArrow className='mx-2 text-xl font-bold'/>
          Back To List
      </Link>
      <div className='flex justify-center pb-3'>
        <div className='px-10 py-3 bg-bozz-seven rounded-[50px] w-[80%] h-full text-bozz-one border border-bozz-one shadow-[6px_6px_6px_rgba(83,62,133,0.5)]'>
          <h1 className='text-lg font-semibold text-center uppercase '>Add Service</h1>
          <div className='w-full flex justify-center'>
            <ul className="steps w-20">
            <li className={`flex items-center justify-end`}> 
                <div className={`text-bozz-six text-xs w-2 h-2 flex justify-center items-center rounded-full p-4 bg-bozz-one`}>
                    <span>1</span></div>
              </li>
            <li className={`flex items-center justify-start`}> 
                <div className={`h-2 w-full ${step === 2 ? 'bg-bozz-one' : 'bg-bozz-four'} block`} value="100" max="100"></div>
                <div className={`text-bozz-six text-xs w-2 h-2 flex justify-center items-center rounded-full p-4 ${step === 2 ? 'bg-bozz-one' : 'bg-bozz-four'}`}>
                    <span>2</span></div>
              </li>
            </ul>
          </div>
          <div className='flex flex-col justify-between h-full'>
            {/* step 1 */}
            {step === 1 &&
              <div className=''>
                <p className='text-md font-bold'>PACKAGE INFORMATION</p>
                <CustomInput width={'w-full'} type='text' placeholder='Birthday packafe' label={'package name'}/>
                <div className='flex gap-10'>
                  <CustomInput width={'w-full'} type='number' placeholder='Birthday packafe' label={'package pricee'}/>
                  <CustomInput width={'w-full'} type='text' placeholder='Birthday packafe' label={'package category'}/>
                </div>
                <div className='mt-4'>
                  <p className='text-bozz-one text-xs'>Description</p>
                  <textarea className='bg-bozz-five text-sm h-16 resize-none w-full border border-bozz-three p-3 caret:text-bozz-one text-bozz-one rounded-lg focus:ring-2 focus:ring-bozz-one focus:border-none' placeholder='Paket yang ditawarkan adalah...'/>
                </div>
                <CustomInput type='file' placeholder={'File Image'} label='Package Image'/>
                <div className=''>
                  <p className='text-bozz-one text-xs '>Included Services</p>
                  <div className='bg-bozz-six border border-bozz-one w-full h-10 pl-5 mt-3 rounded-lg flex gap-2 text-xs items-center'>
                    {tags.map((tag, index) => {
                      return <p className='h-5 text-center px-3 bg-bozz-one text-white rounded-lg flex gap-2  items-center' key={index}>
                        <span>{tag}</span>
                        <IoClose onClick={() => removeTags(index)} className='text-white'/></p>
                    })}
                    <input type={'text'} onKeyUp={(e) => onAddTags(e)} className='bg-bozz-six focus:outline-none h-full focuse:border-none' placeholder='includes'/>
                  </div>
                </div>
              </div>
            }
            {step === 2 &&
              <div className=''>
                <p className='text-md font-bold'>ADDITIONAL INFORMATION</p>
                <div className='flex gap-10'>
                  <CustomInput width={'w-full'} placeholder='Birthday packafe' label={'additional name'}/>
                  <CustomInput type='number' width={'w-full'} placeholder='Birthday packafe' label={'additional price'}/>
                </div>
                <div className='flex justify-center mt-3'>
                  <button className='h-12 w-12 border rounded-md border-bozz-one flex justify-center items-center text-xl font-bold bg-bozz-five'>+</button>
                </div>
              </div>
            }

            <div className='flex justify-between mt-3 bottom-0'>
              <button className={`flex items-center bg-white ${step === 2 ? 'block' : 'invisible'}`} onClick={() => step >= 1 ? setStep(1) : ''}><BiLeftArrowCircle/>Back</button>
              {step === 1 ? 
                <button className={`flex items-center bg-white `} onClick={() => step == 1 ? setStep(2) : ''}>Next<BiRightArrowCircle/></button>
              : <button className={`flex items-center justify-center h-8 w-24 text-center bg-bozz-one text-white rounded-lg text-xs`} onClick={() => step == 1 ? setStep(2) : ''}>Add Service</button>
              }
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default AddService