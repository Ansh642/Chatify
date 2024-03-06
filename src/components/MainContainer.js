import React from 'react'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'
import Welcome from './Welcome'
import CreateGroup from './CreateGroup'
import Login from './Login'
import { Outlet } from 'react-router-dom'

export default function MainContainer() {
  return (
    <div className='w-[90vw] h-[90vh] bg-white shadow-2xl shadow-richblack-400 rounded-xl flex flex-row'>
        <Sidebar/>
        <Outlet/>
        
    </div>
  )
}
