import React from 'react'
import '../App.css'

export default function Login() {
  return (
    <div className='bg-richblack-800 h-[90vh] w-[90vw]'>
      <div className="flex items-center justify-center h-full bg-richblack-800 text-richblack-25">

      <div className="w-[35%] p-8 h-full flex flex-col justify-center gap-3 border-r-2 border-richblack-600">
        <h2 className="text-4xl font-bold mb-4 mx-auto">Login</h2>
        <form className="space-y-4">
          <div className="login-form-group">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md bg-richblack-700 text-richblack-25 outline-none px-2 py-1 shadow-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md bg-richblack-700 text-richblack-25 outline-none px-2 py-1 shadow-sm"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-richblack-900 bg-richblack-25 hover:bg-white transition-all duration-150"
            >
              Log In
            </button>
            <span className='text-blue-100 cursor-pointer flex justify-end hover:text-blue-200'>Not a user?</span>
          </div>
        </form>
      </div>


      <div className="w-[65%] p-8 flex flex-col items-center ">
        <h2 className="text-5xl font-bold mb-4 text-gradient-to-b from-richblack-25 to-richblack-400">Welcome to Chatify</h2>
        <p className="text-xl text-gradient-to-b from-richblack-25 to-richblack-400">Start chatting with friends and colleagues!</p>
      </div>


    </div>
    </div>
  )
}
