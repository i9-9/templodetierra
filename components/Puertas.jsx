import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';


const Puertas = () => {
  return (
    <>
      <div id='puertas' className='container mx-auto bg-yellow my-32 md:columns-2 pt-40'>
        <div className="container py-24 ">
            <h2 className='text-brown font-rosli text-7xl mb-10 text-center md:text-left'>
            Nuestros corazones y puertas están abiertas
            </h2>
            <p className='text-brown text-base mb-10 text-center md:text-left'>
            Bienvenidos todos los seres que deseen hospedarse en el <br/> Templo de Tierra, realizar un retiro grupal o <br/> actividades, siempre estén afines a los propósitos del <br/> Ashram.
            </p>
            <Link to='contacto' spy={true} smooth={true} offset={0} duration={500}>
              <button className='px-12 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0 hover:cursor-pointer'>
                  Contacto  
              </button>
            </Link>
        </div>
        <div className="container py-24 map-responsive p-4 md:block">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.6443818132993!2d-54.80411532410498!3d-34.89027527285299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x957503b16e89a2a3%3A0xf8b2c971241f0f72!2sTemplo%20de%20Tierra!5e0!3m2!1sen!2sar!4v1668488695107!5m2!1sen!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}

export default Puertas