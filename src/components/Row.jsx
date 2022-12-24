import React from 'react'

const Row = ({keyName, value}) => {
  return (
    <tr className='h-6 w-full text-bozz-one text-sm font-semibold capitalize'>
        <td className='w-[20%]'>{keyName}</td>
        <td>:</td>
        <td>{value}</td>
    </tr>
  )
}

export default Row