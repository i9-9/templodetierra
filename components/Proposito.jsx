import React from 'react';
import Image from 'next/image'  
import escalera from '../public/1-carousel.png';
import { Link } from 'react-scroll';

const Proposito = () => {
  return (
    <div id='proposito' className='container flex bg-yellow mx-auto items-center my-20 pt-20'>
        <div className="container hidden md:flex align-bottom">
        <Image
         className='ease-in'
         src={escalera}
         height={651}
         width={580}
         />
        </div>
        <div className="container bg-yellow">
            <h2 className='text-4xl lg:text-6xl font-rosli text-brown text-center md:text-left'>
             Un lugar de retiro para el alma, <br/> donde se puedan generar <br/> transformaciones a nivel <br/> interno en cada individuo. 
            </h2>
            <p className='text-brown text-center md:text-left my-10 text-md'>Bioconstrucción con barro | Arte | Prácticas para el espíritu | cocina natural. </p>
            <Link to='video' spy={true} smooth={true} offset={0} duration={500}>
            <button className='px-12 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0 shadow-sm'>Conocer más
                    </button>
            </Link>
        </div>
    </div>
      )
    }
    
    export default Proposito

  
