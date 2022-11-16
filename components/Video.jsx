import React from 'react'

const Video = () => {
  return (
    <>
        <div className='container mx-auto'>
            <h2 className='text-6xl text-brown font-rosli'>
            Creación de Templo de Tierra
            </h2>
            <p className='text-brown text-base mt-4'>
                Autoconstrucción. Intuitiva, natural y orgánica.
            </p>
        </div>
        <div className='container mx-auto flex justify-center my-6'>
            <iframe width="2000" height="600" src="https://www.youtube.com/embed/l9JPz8UYnwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </>
  )
}

export default Video