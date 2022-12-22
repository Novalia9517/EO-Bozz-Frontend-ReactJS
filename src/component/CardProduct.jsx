import React from 'react'

const CardProduct = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <h2 className="card-title">Wedding Package</h2>
                    <p>Wedding Organizer</p>
                    <p>Wedding Organizer</p>
                    <p>Wedding Organizer</p>
                    <p>Wedding Organizer</p>
                    <div className="card-actions">
                        <button className="btn bg-eo-primary">More Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct