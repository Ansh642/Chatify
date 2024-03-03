import React from 'react'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'

export default function MainContainer() {
  return (
    <div className='w-[90vw] h-[90vh] bg-white shadow-xl shadow-richblack-200 rounded-xl flex flex-row'>
        <Sidebar/>
        <WorkArea/>
    </div>
  )
}
