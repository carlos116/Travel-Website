import React, { useEffect, useRef } from 'react'

function Book(props) { 

  const ref = useRef(null);
  const {setBookTop} = props;

  useEffect(() => {
    if(!ref.current) return
    const topPosition = ref.current.getBoundingClientRect().top;
    setBookTop(topPosition)
  })

  return (
    <div ref={ref} id='search-container' className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
          <div>
            <h2 className='text-center lg:text-start'>Search best places by destination</h2>
              <p className='py-4'>
                Save money on airfare by searching for cheap flight tickets and resorts. Places searches for flight and hotel deals on hundreds of tickets sites to help you find the cheapest and best one. Whether you are looking for a last minute flight or a cheap plane ticket for a later date, you can find the best deals faster at Places.
              </p>
          </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <i className="fa-solid fa-headset text-4xl" />
            </button>
            <div>
              <h3 className='py-2'>Leading Service</h3>
              <p className='py-1'>HIGH-RESPONSE CUSTOMER SERVICE TEAM</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <i className="fa-solid fa-earth-americas text-4xl" />
            </button>
            <div>
              <h3 className='py-2'>Book Worldwide</h3>
              <p className='py-1'>SEARCH FOR BEST LOCATIONS AROUND THE GLOBE</p>
            </div>
          </div>
        </div>
      </div>

        <div>
          <div className='border text-center'>
            <p className='bg-gray-800 text-gray-200 py-2'>Where are you traveling?</p>
          </div>
          <form className='w-full'>
            <div className='flex flex-col my-2'>
              <label>Destination</label>
              <select className='border rounded-md p-2'>
                <option>Cusco</option>
                <option>Kalahari</option>
                <option>khalaktyrsky</option>
                <option>Navagio</option>
                <option>Sunderbans</option>
                <option>Wayanad</option>
              </select>
            </div>
            <div className='flex flex-col my-4'>
              <label>Check-In</label>
              <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col my-2'>
              <label>Check-Out</label>
              <input className='border rounded-md p-2' type="date" />
            </div>
          </form>
          <button className='w-full my-4'>Rates and Availability</button>
        </div>
    </div>
  )
}

export default Book