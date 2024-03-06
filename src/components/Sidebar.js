import {React,useState} from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { MdPersonAddAlt1 } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import '../App.css'

export default function Sidebar() {

  const [conversation, setconversation] = useState([
    {
      name : 'Bhavya',
      lastMessage : 'Kaha Ho',
      timeStamps : '2:03',
    }, 
    {
      name : 'Devansh',
      lastMessage : 'Mess Chaloge?',
      timeStamps : '5:00',
    },  
    {
      name : 'Vaibhav',
      lastMessage : 'Laundary Chaloge?',
      timeStamps : '7:03',
    },  
    {
      name : 'Mummy',
      lastMessage : 'Khana Khaya?',
      timeStamps : '4:07',
    },   

  ]);

  return (
    <div className='h-full w-[30vw] bg-richblack-800 border-r-2'>

      {/* top level header */}
      <div className='cursor-pointer bg-richblack-700 text-richblack-100 flex gap-3 flex-row justify-between px-3 py-3 border-b-[1px] border-richblack-600'>

       <RiAccountCircleLine size={30}/>

       <div className='flex gap-3 items-center'>
        <MdPersonAddAlt1 size={33}/>
        <MdGroupAdd size={32}/>
        
        <IoIosAddCircle size={30}/>
        <FaMoon size={25}  />
       </div>

      </div>

      {/* Search Div */}
      <div className='mt-3 px-4 py-1 w-[98%] cursor-pointer h-10 flex items-center gap-3 mx-auto bg-richblack-700 outline-none rounded-lg  text-richblack-5'>
        <FaSearch className='text-richblack-100'/>
        <input type="search" name="" id="" className='bg-richblack-700 w-[97%] outline-none text-richblack-200' placeholder='Search ...'/>
      </div>
      

      {/* Chats Div */}
      <div className='mt-3 px-4 py-1 w-[97%] h-[510px] overflow-y-scroll scrollbar cursor-pointer items-center gap-3 mx-auto outline-none rounded-xl  text-richblack-5'>
        <div className='flex flex-col gap-5 overflow-visible'>
          {
            conversation.map (  (ele,index)=>{
              return (
                <div key={index} className='text-white flex flex-row gap-2 items-center'> 
                  <div className='rounded-full w-11 h-9 bg-richblack-700'></div>

                  <div className='flex flex-col ml-1 text-richblack-50 w-[90%]'>
                    <p className='text-lg'>{ele.name}</p>
                    <p className='text-richblack-200'>{ele.lastMessage}</p>
                  </div>

                  <div className='w-[20%] flex flex-col mb-5 text-richblack-300'>{ele.timeStamps}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


