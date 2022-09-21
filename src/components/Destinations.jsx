import React, { useRef, useEffect } from 'react'

import Khalaktyrsky from '../assets/khalaktyrsky.jpg';
import Wayanad from '../assets/wayanad.jpg';
import Sunderbans from '../assets/sunderbans.jpg';
import Kalahari from '../assets/kalahari.jpg';
import Cusco from '../assets/cusco.jpg';
import Navagio from '../assets/navagio.jpg';

import DestinationsCard from './DestinationsCard';

function Destinations(props) {
  
  const ref = useRef(null)
  const { setDestinationsTop } = props;

   useEffect(() => {
    if(!ref.current) return
    const topPosition = ref.current.getBoundingClientRect().top;
    setDestinationsTop(topPosition)
  })

  return (
    <div ref={ref} className='text-center'>
      <h1>Visit our top destinations</h1>
      <p className='pt-4'>Sorted by our users' reviews</p>
      <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr'>
          <DestinationsCard bg={Khalaktyrsky} text='Khalaktyrsky' />
          <DestinationsCard bg={Wayanad} text='Wayanad' />
          <DestinationsCard bg={Sunderbans} text='Sunderbans' />
          <DestinationsCard bg={Kalahari} text='Kalahari' />
          <DestinationsCard bg={Cusco} text='Cusco' />
          <DestinationsCard bg={Navagio} text='Navagio' />
      </div>
    </div>
  )
}

export default Destinations
