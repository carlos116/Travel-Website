import React, { useRef } from 'react'
import { useEffect } from 'react';
import beachVid from '../assets/backgroundVid.mp4'

function Hero(props) { 

  const { searchFocus, setSearchFocus } = props;
  const ref = useRef(null);

  useEffect(() => {
    if(searchFocus && ref ) ref.current.focus();
    return () => {
      setSearchFocus(false)
    }
  })

  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1 className='py-2'>Best places around the globe</h1>
          <h2 className='py-3'>Search your next journey</h2>
          <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
            <div>
              <input ref={ref} className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none pl-2' type="text" placeholder='Search Destinations'/>
            </div>
            <div>
              <i className="fa-solid fa-magnifying-glass mr-2 text-xl text-gray-700 cursor-pointer" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default Hero