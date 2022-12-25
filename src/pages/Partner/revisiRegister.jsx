import React from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import CustomInput from '../../components/CustomInput'
import ListRevisi from '../../components/ListRevisi'

const RevisiRegister = () => {
  return (
    <LayoutAdmin>
        <h1 className='text-center font-bold text-xl text-bozz-one underline underline-offset-4'>Revisi Registrasi</h1>
        <div>
        <ol className='list-decimal marker:text-blue-700'>
           <li><ListRevisi label='company name' placeholder={'Company A'}/></li>
           <li><ListRevisi label='company email' placeholder={'Company A'}/></li>
           <li><ListRevisi label='company phone' placeholder={'Company A'}/></li>
           <li><ListRevisi label='company address' placeholder={'Company A'}/></li>
           <li><ListRevisi label='PIC name' placeholder={'Company A'}/></li>
           <li><ListRevisi label='PIC Position' placeholder={'Company A'}/></li>
           <li><ListRevisi label='PIC email' placeholder={'Company A'}/></li>
           <li><ListRevisi label='PIC Phone' placeholder={'Company A'}/></li>
           <li>
            <div className='flex justify-between items-end gap-5'>
                <ListRevisi label='NIB No.' placeholder={'Company A'}/>
                <input type={'file'} className={`h-8 text-xs w-96  rounded-lg border border-bozz-one bg-bozz-five caret-text-bozz-one text-bozz-one file:bg-bozz-one file:h-full`}/>
            </div>
            </li>
           <li>
            <div className='flex justify-between items-end gap-5'>
                    <ListRevisi label='SIUP No.' placeholder={'Company A'}/>
                    <input type={'file'} className={`h-8 text-xs w-96  rounded-lg border border-bozz-one bg-bozz-five caret-text-bozz-one text-bozz-one file:bg-bozz-one file:h-full`}/>
                </div>
           </li>
           <li><ListRevisi label='Bank Account Name' placeholder={'Company A'}/></li>
           <li><ListRevisi label='Bank Account Number' placeholder={'Company A'}/></li>
        </ol>
        </div>
        <div className='flex justify-end mt-5 mb-10 h-8'>
            <label  htmlFor="my-modal-4" className='btn btn-sm text-xs bg-[#EF6D58] text-bozz-six w-24 hover:bg-[#EF6D70] rounded-lg hover:scale-110'>Cancel</label>
            <button className='btn btn-sm text-xs bg-bozz-one text-bozz-six w-24 mx-5 rounded-lg hover:bg-primary hover:scale-110'>Send</button>
        </div>
    </LayoutAdmin>
  )
}

export default RevisiRegister