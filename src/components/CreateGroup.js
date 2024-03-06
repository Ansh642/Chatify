import React from 'react'

export default function CreateGroup() {
  return (
    <div className='h-full flex flex-col w-[70vw] bg-richblack-800'>
        <div className="flex items-center justify-center h-full bg-richblack-800">

        <div className="w-4/5 lg:w-1/2 xl:w-1/3 bg-richblack-900 p-8 rounded-lg shadow-lg shadow-richblack-900">
        <h2 className="text-3xl font-bold mb-4 text-center text-richblack-25">Create Group</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-pure-greys-5">
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              name="groupName"
              className="mt-1 block w-full rounded-md bg-richblack-800 text-richblack-25 outline-none px-2 py-1 shadow-sm"
              placeholder="Enter group name"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-pure-greys-5">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="mt-1 block w-full rounded-md bg-richblack-800 text-richblack-25 outline-none px-2 py-1 shadow-sm"
              placeholder="Enter group description"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-richblack-900 bg-richblack-25 hover:bg-white"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>

    </div>
    </div>
  )
}
