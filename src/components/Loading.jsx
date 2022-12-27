import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center h-screen w-screen bg-bozz-five items-center">
            <div className="radial-progress text-primary  animate-spin" style={{"--value":70}}></div>
            <span className='text-rimary text-sm forn-bold'> Loading...</span>
    </div>
  )
}

export default Loading