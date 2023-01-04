import React from 'react'

const ImageModal = ({link, title}) => {
  return (
    <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative py-10 px-16 h-auto bg-white text-bozz-one" htmlFor="">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-5 top-5 bg-bozz-three">✕</label>
                    <h3 className="text-md font-bold text-bozz-three text-center">Image</h3>
                    <img src={link} className='w-full'/>
                </label>
            </label>
        </>
  )
}

export default ImageModal