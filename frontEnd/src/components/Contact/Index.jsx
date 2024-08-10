import React from 'react'
import { SignupFormDemo } from './Contact'

const Index = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-gray-950' id='contact'>
      <h1 className="text-3xl font-bold text-white mb-8 mt-12 italic">Contact</h1>
      <div className='w-full flex flex-col items-center justify-center lg:flex-row lg:items-start'>
        {/* <div className='w-full lg:w-1/2 flex flex-col items-center justify-center text-justify p-2'> */}
          <SignupFormDemo />
        {/* </div> */}
        {/* <div className='w-full lg:w-1/2 flex flex-col items-center justify-center text-justify p-2'> */}
          {/* Additional content can be added here */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Index
