import React from 'react';
import Image from 'next/image';
import magia from '../public/magia.png';
import { Link } from 'react-scroll';


const Magia = () => {
  return (
    <div id='magia' className='container flex bg-yellow columns-2xs sm:columns-1 mx-auto items-center md:items-center pt-20 '>
      <div className="container bg-yellow">
        <h2 className='text-5xl text-center lg:text-6xl font-rosli text-brown md:text-left'>
                 Experimentá con <br/>
                 nosotros la magia de 
                 <br/>vivir en la Bioconstrucción.
        </h2>
        <p className='text-brown text-center my-10 text-md md:text-left '>Ubicado en Balneario Buenos Aires,<br/>Punta del Este, Uruguay.<br/> A pocos metros del Océano Atlántico.
        </p>
        <Link to='proposito' spy={true} smooth={true} offset={0} duration={500}>
        <button className='px-12 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0 shadow-sm'>Conocer más
                    </button>
        
        </Link>
      </div>
      <div className="container hidden md:flex justify-end relative ease-in duration-300">
        <Image
         src={magia}
         height={651}
         width={580}
         />
        </div>
        <div className="bg-brown h-full  ">
          
        </div>
    </div>
  )
}


export default Magia