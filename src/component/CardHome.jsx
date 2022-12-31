import React from 'react'


const CardHome = ({ dataCity, dataCategory, searchCategory, searchCity }) => {
    return (
        <div className="card bg-[#F9F5F6] w-full max-h-max  shadow-xl">
            <form>
                <div className="gap-12 p-8 md:flex flex-col-sm justify-center">
                    <div>
                        <p>Pilih Category</p>
                        <select onChange={searchCategory} className="select select-bordered border-bozz-one w-full max-w-xs bg-bozz-six text-bozz-one">
                            {dataCategory ? (
                                    dataCategory.map((item => {
                                        return (
                                            <option>{item.service_category}</option>
                                        )
                                    }))
                            ): <></>}
                            
                        </select>
                    </div>
                    <div>
                        <p>Pilih Domisili</p>
                        <select onChange={searchCity} className="select select-bordered border-bozz-one w-full max-w-xs bg-bozz-six text-bozz-one">
                            {dataCity ? (
                                    dataCity.map((item => {
                                        return (
                                            <option>{item.city_name}</option>
                                        )
                                    }))
                                
                            ):<></>}
                        </select>
                    </div>
                    <div>
                        <p>Min Price</p>
                        <input type="number" placeholder="RP" className="input w-full max-w-xs border border-bozz-one w-full max-w-xs bg-bozz-six text-bozz-one" />
                    </div>
                    <div>
                        <p>Max Price</p>
                        <input type="number" placeholder="RP" className="input w-full max-w-xs border border-bozz-one w-full max-w-xs bg-bozz-six text-bozz-one" />
                    </div>
                </div>
                <div className='text-center flex justify-center py-5'>
                    <button className='btn bg-bozz-one text-bozz-six font-semibold'>Cari</button>
                </div>

            </form>
        </div>
    )
}

export default CardHome