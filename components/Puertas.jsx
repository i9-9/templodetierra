import React from 'react';
import Image from 'next/image'


const Puertas = () => {
  return (
    <>
    <div className='container mx-auto bg-yellow my-32 md:columns-2'>
        <div className="container py-24 ">
            <h2 className='text-brown font-rosli text-7xl mb-10'>
            Nuestros corazones y puertas están abiertas
            </h2>
            <p className='text-brown text-base mb-10'>
            Bienvenidos todos los seres que deseen hospedarse en el <br/> Templo de Tierra, realizar un retiro grupal o <br/> actividades, siempre estén afines a los propósitos del <br/> Ashram.
            </p>
            <button className='px-12 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0'>
                Contacto
            </button>
        </div>
        <div className="container py-24 map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.6443818132993!2d-54.80411532410498!3d-34.89027527285299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x957503b16e89a2a3%3A0xf8b2c971241f0f72!2sTemplo%20de%20Tierra!5e0!3m2!1sen!2sar!4v1668488695107!5m2!1sen!2sar" width="300" height="225" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default Puertas