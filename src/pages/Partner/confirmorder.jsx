import React from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import Row from '../../components/Row'
import { BiLeftArrow } from 'react-icons/bi'
import { formatCurrency } from '../../utils/formatCurrency'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const ConfirmOrder = () => {
    const onDecline = () => {
        Swal.fire({
            title: "Are you sure to decline this order?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#17345f",
            confirmButtonText: "Yes, Sure",
            cancelButtonColor: "#F47522",
            cancelButtonText: "No, Cancel Decline",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: "center",
                icon: "success",
                text: "Decline Order success",
                showConfirmButton: true,
                timer: 1500,
              });
      
            }
          });
    }

    const onConfirm = () => {
        Swal.fire({
            title: "You can\t cancel this order once you confirm it, Still sure to confirm?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#17345f",
            confirmButtonText: "Yes, Sure",
            cancelButtonColor: "#F47522",
            cancelButtonText: "No, Give me a seconds",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: "center",
                icon: "success",
                text: "Confirm Order success",
                showConfirmButton: true,
                timer: 1500,
              });
      
            }
          });
    }
  return (
    <LayoutAdmin>
        <Link to='/partner/list-order' className='text-bozz-two font-bold flex mb-3 items-center'>
            <BiLeftArrow className='mx-2 text-xl font-bold'/>
            Back To List
        </Link>
        <div className='w-full border border-bozz-one px-8 py-5'>
            <h1 className='text-center text-xl font-bold text-bozz-one mb-3'>Order Information</h1>
            <table className='w-full'>
                <tbody>
                <Row keyName={'event name'} value={'Anara Birthday Party'}/>
                <Row keyName={'client name'} value={'Anara'}/>
                <Row keyName={'client address'} value={'Jln. Anara Sumanar No.123'}/>
                <Row keyName={'client city'} value={'Bali'}/>
                <Row keyName={'start date'} value={'12/12/2022'}/>
                <Row keyName={'end date'} value={'12/12/2022'}/>
                <Row keyName={'service name'} value={'Birthday Party'}/>
                <Row keyName={'service price'} value={formatCurrency(18500000)}/>
                <tr className='h-8 w-full text-bozz-one text-sm font-semibold capitalize'>
                    <td className='w-[20%]'>Additional Info</td>
                    <td>:</td>
                </tr>
                </tbody>
            </table>
            <p className='w-full pl-10 font-semibold text-bozz-one text-sm'>
                Additional 1 x 4 = 
                <span className='ml-12'>{formatCurrency(1400000)}</span>
            </p>
            <p className='w-full pl-10 font-semibold text-bozz-one text-sm'>
                Additional 1 x 4 = 
                <span className='ml-12'>{formatCurrency(1400000)}</span>
            </p>
            <p className='w-full pl-10 font-semibold text-bozz-one text-sm'>
                Additional 1 x 4 = 
                <span className='ml-12'>{formatCurrency(1800000)}</span>
            </p>
          
            <p className='font-bold text-lg flex justify-between text-bozz-one h-12 border-t-2 border-bozz-one mt-3'>
                <span>Total Order</span>    
                <span>{formatCurrency(23100000)}</span>    
            </p>
            {/* EF6D58 */}
            <div className='mt-5 flex justify-end text-sm'>
                <button className='h-8 bg-[#EF6D58] text-bozz-six w-32 mx-5 rounded-lg' onClick={onDecline}>Decline Order</button>
                <button className='h-8 bg-bozz-one text-bozz-six w-32 rounded-lg' onClick={onConfirm}>Confirm Order</button>
            </div>
        </div>
    </LayoutAdmin>
  )
}

export default ConfirmOrder