import React from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import List from '../../components/List'
import NoteRevisi from '../../components/NoteRevisi'

const VerifyPartner = () => {
  return (
    <LayoutAdmin>
        <h1 className='text-center font-bold text-xl text-bozz-one underline underline-offset-4'>Verify Partner</h1>
        <ol class='list-decimal marker:text-blue-700'>
            <li><List title={'Company Name'} value={'Company Issue'}/></li>
            <li><List title={'Company Email'} value={'company@gmail.com'}/></li>
            <li><List title={'Company Phone'} value={'089912345678'}/></li>
            <li><List title={'Company Address'} value={'Jln. Anggrek No.27'}/></li>
            <li><List title={'PIC Name'} value={'Budi'}/></li>
            <li><List title={'PIC Position'} value={'Lead Team'}/></li>
            <li><List title={'PIC Email'} value={'name@mail.com'}/></li>
            <li><List title={'PIC Phone'} value={'08991234567'}/></li>
            <li><List title={'NIB No'} value={'08991234567'} link='link download'/></li>
            <li><List title={'SIUP No.'} value={'08991234567'} link='link download'/></li>
            <li><List title={'Bank Account Name'} value={'Wati'}/></li>
            <li><List title={'Bank Account Number'} value={'2990891222'}/></li>
        </ol>
        <div className='flex justify-end mt-5 mb-10 h-8'>
            <label  htmlFor="my-modal-4" className='btn btn-sm text-xs bg-[#EF6D58] text-bozz-six w-24 hover:bg-[#EF6D70] rounded-lg hover:scale-110'>Revision</label>
            <button className='btn btn-sm text-xs bg-bozz-one text-bozz-six w-24 mx-5 rounded-lg hover:bg-primary hover:scale-110'>Verify</button>
        </div>
        <NoteRevisi/>
    </LayoutAdmin>
  )
}

export default VerifyPartner