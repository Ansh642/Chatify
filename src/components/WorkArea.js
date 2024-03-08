import {React,useState} from 'react'
import { IoMdVideocam } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import '../App.css';

export default function WorkArea() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [show, setshow] = useState(false)
  
    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
      console.log(selectedFile);
    };

    const [messages, setMessages] = useState([
      { text: 'Hello, how are you?' },
      { text: 'I am fine, thank you!' },
      { text: 'What about you?' },
      { text: 'I am doing great!' },
      { text: 'Where are you !' },
      { text: 'Still at work' },

    ]);

  return (

    <div className={`h-full flex flex-col w-[70vw] bg-richblack-800`}>
      
      {/* Header div */}
      <div className='cursor-pointer bg-richblack-700 h-[58px] flex gap-3 flex-row justify-between px-3 py-3 border-b-[1px] border-richblack-600'>

          <div className='flex flex-row gap-2 items-center ml-4'>

          <div className='rounded-full w-9 h-9 bg-richblack-500'></div>

          <div className='flex flex-col ml-2 text-richblack-50'>
            <p className='text-xl'>Bhavya</p>
            <p className='text-xs text-richblack-200'>Online</p>
          </div>

          <div className='relative flex gap-5 ml-[670px] items-center justify-end '>
            <IoMdVideocam className='text-richblack-100 hover:text-white' size={25}/>
            <IoMdCall className='text-richblack-100 hover:text-white' size={25}/>
            <FaTrash className='text-richblack-100 hover:text-white' size={20} onClick={()=>setshow(!show)}/>

            {/* Delete Chat functionality */}
            <div className={`w-56 absolute rounded-lg top-52 right-96 flex flex-col items-center py-2 px-3 h-36 text-center bg-richblack-900 ${show===true ? `visible` : `hidden`}`}>
              
              <div className='text-xl mt-2'>Are You Sure You want to Delete the Chats? </div>
              <div className='flex gap-3'>
                <button className='px-4 py-1 mt-4 bg-richblack-50 hover:bg-richblack-200 text-richblack-900 rounded-xl'>Yes</button>
                <button className='px-4 py-1 mt-4 bg-richblack-50 hover:bg-richblack-200 text-richblack-900 rounded-xl' onClick={()=>setshow(false)}>Cancel</button>
              </div>
              
            </div>
           
          </div>

          </div>
          
      </div>


      {/* Chatting div */}
      <div className='h-[519px] flex flex-col mt-3 overflow-y-scroll scrollbar'>

      <div className='text-richblack-5 bg-blue-700 rounded-3xl px-3 py-2 mx-auto mt-2 mb-3'>
        Messages and calls are end to end encrypted 🔒
      </div>

      <div className="p-4 flex flex-col gap-2">
          {messages.map((message, index) => (
            index % 2 === 0 ? 
              <MessageSelf key={index} message={message} /> :
              <MessageOthers key={index} message={message} />
          ))}
        </div>
      </div>


      {/* Message input div */}
      <div className=' px-4 py-1 w-[99%] rounded-md cursor-pointer h-11 flex items-center gap-3 mx-auto bg-richblack-700 outline-none  text-white'>
        <input type="text" name="" id="" className='bg-richblack-700 w-[97%] capitalize outline-none text-richblack-5' placeholder='Type Your Message Here...'/>


        <div className="relative">
      <input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        onChange={handleFileInputChange}
      />
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-md cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.652 4.26a6.463 6.463 0 0 0-12.01 3.476A4.492 4.492 0 0 0 2 13.5c0 2.485 2.015 4.5 4.5 4.5h8c2.485 0 4.5-2.015 4.5-4.5 0-1.303-.553-2.485-1.437-3.34l-.211-.22-.26.19zm-.542.928a5.463 5.463 0 0 1 10.148 2.948A3.496 3.496 0 0 1 17.5 13.5c0 1.93-1.57 3.5-3.5 3.5h-8c-1.93 0-3.5-1.57-3.5-3.5 0-1.014.435-1.93 1.128-2.572a.25.25 0 0 1 .393.17l.28.902a.25.25 0 0 0 .476-.134l-.275-.884a.249.249 0 0 1 .06-.232A5.463 5.463 0 0 1 14.11 5.188zM11 10a1 1 0 0 1 1-1h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H12a1 1 0 0 1-1-1zm1 2v.5a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-1a.5.5 0 0 1 .5-.5H11a1 1 0 0 1 1 1zm-3 1a1 1 0 0 1-1-1h-.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H7a1 1 0 0 1 1 1zm-1-2v-.5a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v1a.5.5 0 0 1-.5.5H7a1 1 0 0 1-1-1zm-3-1a1 1 0 0 1-1-1H2a.5.5 0 0 1-.5-.5v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zm-1 3v.5a.5.5 0 0 1-.5.5H2a1 1 0 0 1-1-1v-1a.5.5 0 0 1 .5-.5H3a1 1 0 0 1 1 1zm9-1a1 1 0 0 1-1-1h-.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H11a1 1 0 0 1 1 1zm-1 2v.5a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-1a.5.5 0 0 1 .5-.5H10a1 1 0 0 1 1 1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      
        </div>

      <IoSendSharp size={25}/>
      </div>


    </div>


  )
}




