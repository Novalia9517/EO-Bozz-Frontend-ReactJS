import React from 'react'


const CardHome = () => {
    return (
        <div className="card bg-[#F9F5F6] w-full max-h-max  shadow-xl">
            <form>
                <div className="gap-12 p-8 md:flex flex-col-sm justify-center">
                    <div>
                        <p>Pilih Category</p>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Wedding</option>
                            <option>EO</option>
                            <option>EO Esport</option>
                        </select>
                    </div>
                    <div>
                        <p>Pilih Domisili</p>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Jakarta</option>
                            <option>Solo</option>
                            <option>Bogor</option>
                        </select>
                    </div>
                    <div>
                        <p>Min Price</p>
                        <input type="text" placeholder="RP" className="input w-full max-w-xs" />
                    </div>
                    <div>
                        <p>Max Price</p>
                        <input type="text" placeholder="RP" className="input w-full max-w-xs" />
                    </div>
                </div>
                <div className='text-center flex justify-center py-5'>
                    <button className='btn'>Cari</button>
                </div>

            </form>
        </div>
    )
}

export default CardHome