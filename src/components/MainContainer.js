import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function MainContainer() {
  return (
    <div className='w-[90vw] h-[90vh] bg-white shadow-2xl shadow-richblack-400 rounded-xl flex flex-row'>
        <Sidebar/>
        <Outlet/>
        
    </div>
  )
}
