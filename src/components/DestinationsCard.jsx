import React from 'react'

function DestinationsCard(props) {
    const {bg, text} = props
  return (
    <div className='relative'>
            <img className='w-full h-full object-cover' src={bg} alt={text} />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full '>
                <p className='absolute left-4 bottom-4 text-2xl text-white font-bold'>{text}</p>
            </div>
    </div>
  )
}

export default DestinationsCard