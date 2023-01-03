import React from 'react'
import Navbar from '../component/Navbar'
import TableTransaction from '../component/TableTransaction'

const TransactionList = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto px-10 py-10 text-black'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Purchase Date</th>
                                <th>Package Name</th>
                                <th>Package Price</th>
                                <th>Event Date Start</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <TableTransaction />
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TransactionList