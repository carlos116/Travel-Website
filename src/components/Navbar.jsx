import React, { useState } from 'react'

function Navbar(props) {

  const { 
    isLogin, 
    setIsLogin, 
    bookTop,
    destinationsTop,
    contactTop,
    setSearchFocus
   } = props
   
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 className={nav ? 'hidden' : ''}>PLACES</h1>
        </div>
        <ul className='hidden md:flex'>
            <li onClick={() => window.scrollTo(0, 0)}>Home</li>
            <li onClick={() => window.scrollTo(0, bookTop)} >Book</li>
            <li onClick={() => window.scrollTo(0, destinationsTop)} >Destinations</li>
            <li onClick={() => window.scrollTo(0, contactTop)} >Contact</li>
        </ul>
        <div className='hidden md:flex'>
            <i onClick={() => setSearchFocus(true)} className="fa-solid fa-magnifying-glass mr-3 cursor-pointer" />
            <i onClick={() => setIsLogin(!isLogin)} className="fa-solid fa-user-plus cursor-pointer" />
        </div>
        <div className='md:hidden z-10' onClick={handleNav}>
          {nav ?<i className="fa-sharp fa-solid fa-xmark text-gray-800 cursor-pointer text-xl" /> : <i className="fa-solid fa-bars cursor-pointer" /> }
        </div>

        {/* Mobile Navbar*/}
 
        <div className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1>PLACES</h1>
            <li className='border-b' onClick={() => {
              window.scrollTo(0, 0)
              setNav(!nav)
              }} >Home</li>
            <li className='border-b' onClick={() => {
              window.scrollTo(0, bookTop);
              setNav(!nav)
              }} >Book</li>
            <li className='border-b' onClick={() => {
              window.scrollTo(0, destinationsTop)
              setNav(!nav)
              }} >Destinations</li>
            <li className='border-b' onClick={() => {
              window.scrollTo(0, contactTop)
              setNav(!nav)
              }} >Contact</li>
            <div className='flex flex-col'>
              <button onClick={() => {
                setSearchFocus(true)
                setNav(!nav)
                }}  className='my-6'>Search</button>
              <button onClick={() => setIsLogin(!isLogin)}>Login</button>
            </div>
            <div className='flex justify-between my-8'>
              <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook icon" /></a>
              <a href="https://twitter.com/"><i className="fa-brands fa-twitter icon" /></a>
              <a href="https://youtube.com/"><i className="fa-brands fa-youtube icon" /></a>
              <a href="https://instagram.com/"><i className="fa-brands fa-instagram icon" /></a>
              <a href="https://pinterest.com/"><i className="fa-brands fa-pinterest icon" /></a>
            </div>
          </ul>
        </div>
    </div>
  ) 
}

export default Navbar