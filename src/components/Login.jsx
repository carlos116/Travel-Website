import React from 'react'

function Login(props) {
  const {isLogin, setIsLogin} = props
  return (
    <div className="login-section flex flex-col items-center w-screen h-screen z-10">
        <button onClick={() => setIsLogin(!isLogin)} className='my-16 p-2'>Back to Home</button>
    <form className="mx-auto items-center border flex flex-col bg-white p-10 rounded-sm">
      <h4 className="mb-10 text-lg">Please Login</h4>
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          className="border border-gray-700 rounded-md text-xs p-2 mb-2"
          placeholder="email address"
        />
        <input
          type="password"
          name="password"
          className="border border-gray-700 rounded-md text-xs p-2"
          placeholder="password"
        />
        <button className="p-1 mt-4">Login</button>
      </div>
    </form>
    </div>
  )
}

export default Login