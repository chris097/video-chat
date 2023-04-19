import React from 'react'

const LiveStream = ({ userVideo, partnerVideo }) => {
    return (
        <div className='ml-64 text-white pt-20 w-[55.4%] border'>
            <div className='flex justify-center w-full gap-6'>
                <div className='w-1/2'>
                     <video autoPlay ref={userVideo} />
                </div>
                <div className='w-1/2'>
                    <video autoPlay ref={partnerVideo} />
                </div>
            </div>
        </div>
    )
};

export default LiveStream