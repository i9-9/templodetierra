import Image from 'next/image'
import React from 'react'


const Cuartos = () => {
  return (
    <>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-4 md:gap-6 ">
      <div className='card shadow-sm'>
        <div className="p-2 text-right">
          <div className="inline-flex">
            <button className='btn h-8 w-8 rounded-full'>

            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cuartos