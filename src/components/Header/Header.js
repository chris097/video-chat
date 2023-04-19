import React from 'react'

const Header = () => {
  return (
      <div className='h-20 w-full fixed top-0 left-0 z-50 bg-[#1a1a1a] border-b border-gray-700 text-white'>
          <div className='flex justify-between w-full items-center px-10 h-full'>
              <div className='text-3xl font-medium'>Talent+</div> 
          <button className='bg-[#845695] text-white px-6 py-4 rounded-md'>Create Room</button>
          </div>
    </div>
  )
}

export default Header;