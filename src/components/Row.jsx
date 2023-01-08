import React from 'react'

const Row = ({keyName, value}) => {
  return (
    <tr className='h-6 w-full text-bozz-one text-sm font-semibold capitalize'>
        <td className='w-[25%]'>{keyName}</td>
        <td className='mx-3'>:</td>
        <td>{value}</td>
    </tr>
  )
}

export default Row