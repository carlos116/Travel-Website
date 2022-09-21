import React, { useRef, useEffect } from 'react'

function Footer(props) {

const ref = useRef(null)
  const { 
    setContactTop,
    bookTop,
    destinationsTop,
    contactTop
 } = props;

   useEffect(() => {
    if(!ref.current) return
    const topPosition = ref.current.getBoundingClientRect().top;
    setContactTop(topPosition)
  })

  return (
    <div ref={ref} className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto text-center sm:text-left sm:grid sm:grid-cols-2 md:grid-cols-4'>
                <div className='m-5 min-w-[210px]'>
                    <h3 className='mb-3'>Contact</h3>
                    <p>Street: 26 Harley drive</p>
                    <p>Zip Code: 21211</p>
                    <p>Phone: 444-123-4378 </p>
                    <p>email: spprt@plcs.com</p>
                </div>
                <div className='m-5'>
                    <h3 className='mb-3'>Oportunities</h3>
                    <p className='cursor-pointer'>About</p>
                    <p className='cursor-pointer'>Partnerships</p>
                    <p className='cursor-pointer'>Careers</p>
                    <p className='cursor-pointer'>Advertising</p>
                </div>
                <div className='m-5'>
                    <h3 className='mb-3'>Quick links</h3>
                    <p className='cursor-pointer' onClick={() => window.scrollTo(0, 0)} >Home</p>
                    <p className='cursor-pointer' onClick={() => window.scrollTo(0, bookTop)} >Book</p>
                    <p className='cursor-pointer' onClick={() => window.scrollTo(0, destinationsTop)} >Destinations</p>
                    <p className='cursor-pointer' onClick={() => window.scrollTo(0, contactTop)} >contact</p>
                </div>
                <div className='m-5'>
                    <h3 className='mb-3'>Connect with us</h3>
                    <div className='flex flex-col items-center sm:items-start sm:pl-8'>
                        <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook icon" /></a>
                        <a href="https://twitter.com/"><i className="fa-brands fa-twitter icon" /></a>
                        <a href="https://youtube.com/"><i className="fa-brands fa-youtube icon" /></a>
                        <a href="https://instagram.com/"><i className="fa-brands fa-instagram icon" /></a>
                    </div>
                </div>
        </div>
    </div>
  )
}


export default Footer