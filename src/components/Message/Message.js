import React from 'react'

const Message = ({value, handleChange, sendMessage}) => {
  return (
    <>
    <div className='w-96 h-[87%] fixed right-0 top-0 bg-[#262625] pt-24 text-gray-200/70 pb-8 overflow-y-auto overflow-x-hidden'>
        <div className='text-[rgb(179,102,249,.9)] text-lg px-6 pt-3'>Talent+ Bot</div>
        <p className='px-5 text-sm mt-2'>Welcome to the room, Don't be shy, say hello!</p>
        <div className='text-[rgb(179,102,249,.9)] text-lg px-6 pt-3'>Talent+ Bot</div>
        <p className='px-5 text-sm mt-2'>Christian Chiemela Just entered the room</p>
        {/* chatbox */}
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        <div className='text-[rgb(179,102,249,.9)] text-lg px-6 pt-3'>Talent+ Bot</div>
        <p className='px-5 text-sm mt-2'>Christian Chiemela Just entered the room</p>
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        <div className='bg-[#363739] flex flex-col w-auto p-2 mx-4 rounded-md text-sm mt-3'>
          <div className='font-bold'>Christian Chiemela</div>
          <p className='mt-2'>Paul is likely to pass this test</p>
        </div>
        {/* send message */}
      </div>
      <div className='w-96 fixed bottom-0 h-[13%] flex justify-center items-center px-4 right-0 bg-black/30'>
              <input
                  value={value}
                  onChange={handleChange}
                  className='bg-gray-400/50 w-full h-16 rounded-md px-4 text-white outline-none'
                  type="text" placeholder="Send Message..." />
              <button onClick={sendMessage}>Send Message...</button>
      </div>
      </>
  )
}

export default Message;