import React from 'react'

const Video = () => {
  return (
    <>
        <div id='video' className='container mx-auto pt-16'>
            <h2 className='text-6xl text-brown font-rosli text-center md:text-left '>
            Creación de Templo de Tierra
            </h2>
            <p className='text-brown text-base my-2 text-center md:text-left '>
                Autoconstrucción. Intuitiva, natural y orgánica.
            </p>
        </div>
        <div className='container mx-auto flex justify-center my-4 px-2 md:px-0'>
            <iframe width="2000" height="600" src="https://www.youtube.com/embed/l9JPz8UYnwU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
        </div>
    </>
  )
}

export default Video