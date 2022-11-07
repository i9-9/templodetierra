import React from 'react';
import Image from 'next/image';
import magia from '../public/magia.png'

const Magia = () => {
  return (
    <div className='md:columns-2 h-100'>
        <div className="container w-50 bg-yellow h-screen mt-20">
            <h2 className='text-5xl lg:text-6xl font-bold font-roslindale text-brown text-center'>
                Experimentá con <br/>
                nosotros la magia de 
                <br/>vivir en la Bioconstrucción.
            </h2>
            <p className='text-brown text-center my-10 text-lg'>Ubicado en Balneario Buenos Aires,<br/> Punta del Este, Uruguay.<br/> A pocos metros del Océano Atlántico.</p>
        </div>
        <div className="container lg:w-50 hidden lg:block ">
        <Image
         src={magia}
         />
        </div>
    </div>
  )
}

export default Magia