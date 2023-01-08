import React from 'react'

const NoteRevisi = ({note, revisi}) => {
  return (
    <>
            <input type="checkbox" id="notes" className="modal-toggle" />
            <label htmlFor="notes" className="modal cursor-pointer">
                <label className="modal-box relative py-10 px-16 h-auto bg-white text-bozz-one" htmlFor="">
                    <label htmlFor="notes" className="btn btn-sm btn-circle absolute right-5 top-5 bg-bozz-one text-white">✕</label>
                    <h3 className="text-2xl font-bold text-bozz-one text-center">NOTES</h3>
                    <div className='mt-4'>
                        <p className='text-bozz-one font-semibold text-md '>Apa yang harus direvisi?</p>
                        <textarea 
                            className='bg-bozz-five text-sm h-40 resize-none w-full border border-bozz-three p-3 caret:text-bozz-one text-bozz-one rounded-lg' 
                            placeholder='Tolong perbaiki SIUP' onChange={note}
                        />
                    </div>
                    <button className='w-full text-md bg-bozz-one text-white mt-8 rounded-md h-10' onClick={revisi}>Send</button>
                </label>
            </label>
        </>
  )
}

export default NoteRevisi