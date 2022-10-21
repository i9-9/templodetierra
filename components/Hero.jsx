import React from 'react'

const Hero = ({heading, subheading}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[24] flex flex-col '>
            <h2 className='text-8xl font-bold font-roslindale text-yellow text-center'>{heading}</h2>
            <p className='py-5 text-3xl font-lane tracking-[4rem] text-center text-yellow m-auto'>{subheading}</p>
            {/* <button className='px-8 py-2 border justify-center flex'>Reservar</button> */}
        </div>

    </div>
  )
}

export default Hero 