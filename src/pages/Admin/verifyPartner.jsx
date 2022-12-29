import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import List from '../../components/List'
import NoteRevisi from '../../components/NoteRevisi'
import Swal from 'sweetalert2'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BiLeftArrow } from 'react-icons/bi'
import axios from 'axios'

const VerifyPartner = () => {
  const [checkboxStatus, setCheckboxStatus] = useState(Array(12).fill(false));
  const [disable, setDisable] = useState(true)
  const [partnerData, setPartnerData] = useState()
  const navigate = useNavigate()
  const location = useLocation();
  const id = location?.state?.id;

  console.log(id)
  const getDataPartner = async () => {
    await axios.get(`https://irisminty.my.id/partners/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
    })
      .then(res => {
        const data = res.data.data
        console.log(data)
        setPartnerData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const editDisable = () => {
    console.log(checkboxStatus)
    if (checkboxStatus.filter(item => item == true).length >= 11) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }
  const buttonHandler = (index) => {
    let status = [...checkboxStatus];
    status[index] = !status[index]
    setCheckboxStatus(status)
    editDisable()
  }
  const onVerify = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: 'Verify Successfull',
      showConfirmButton: true
    })
    navigate('/admin/')
  }

  useEffect(() => {
    getDataPartner()
  }, [])


  console.log(checkboxStatus.every(item => item === true))
  console.log(disable)
  return (
    <LayoutAdmin>
      <Link to='/admin/' className='text-bozz-one font-bold flex items-center mt-2'>
        <BiLeftArrow className='mx-2 text-xl font-bold' />
        Back To List
      </Link>
      <h1 className='text-center font-bold text-xl text-bozz-one underline underline-offset-4'>Verify Partner</h1>
      
        {partnerData ? (
          <ol className='list-decimal marker:text-blue-700'>
        <li><List title={'Company Name'} value={partnerData.company_name} checked={checkboxStatus[0]} onChange={() => buttonHandler(0)} /></li>
        <li><List title={'Company Email'} value={partnerData.email} checked={checkboxStatus[1]} onChange={() => buttonHandler(1)} /></li>
        <li><List title={'Company Phone'} value={partnerData.company_phone} checked={checkboxStatus[2]} onChange={() => buttonHandler(2)} /></li>
        <li><List title={'Company Address'} value={partnerData.company_address} checked={checkboxStatus[3]} onChange={() => buttonHandler(3)} /></li>
        <li><List title={'PIC Name'} value={partnerData.company_name} checked={checkboxStatus[4]} onChange={() => buttonHandler(4)} /></li>
        <li><List title={'PIC Position'} value={partnerData.pic_position} checked={checkboxStatus[5]} onChange={() => buttonHandler(5)} /></li>
        <li><List title={'PIC Email'} value={partnerData.email} checked={checkboxStatus[6]} onChange={() => buttonHandler(6)} /></li>
        <li><List title={'PIC Phone'} value={partnerData.pic_phone} checked={checkboxStatus[7]} onChange={() => buttonHandler(7)} /></li>
        <li><List title={'NIB No'} value={partnerData.nib_number} link='link download' checked={checkboxStatus[8]} onChange={() => buttonHandler(8)} /></li>
        <li><List title={'SIUP No.'} value={partnerData.siup_number} link='link download' checked={checkboxStatus[9]} onChange={() => buttonHandler(9)} /></li>
        <li><List title={'Bank Account Name'} value={partnerData.bank_account_name} checked={checkboxStatus[10]} onChange={() => buttonHandler(10)} /></li>
        <li><List title={'Bank Account Number'} value={partnerData.bank_account_number} checked={checkboxStatus[11]} onChange={() => buttonHandler(11)} /></li>
         </ol>
        ): <></>}
     
      <div className='flex justify-end mt-5 mb-10 h-8'>
        {disable === false ?
          <button className='btn btn-sm text-xs bg-bozz-one text-bozz-six w-24 mx-5 rounded-lg hover:bg-primary hover:scale-110 disabled:opacity-75 disabled:bg-gray-800' onClick={onVerify}>Verify</button>
          : <label htmlFor="my-modal-4" className='btn btn-sm text-xs bg-[#EF6D58] text-bozz-six w-24 hover:bg-[#EF6D70] rounded-lg hover:scale-110'>Revision</label>
        }
      </div>
      <NoteRevisi />
    </LayoutAdmin>
  )
}

export default VerifyPartner