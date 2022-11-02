import React from 'react';
import Image from 'next/image';
import magia from '../public/magia.png'

const Magia = () => {
  return (
    <div className='columns-2 h-100'>
        <div className="container w-50 bg-yellow h-screen">
            <h2 className='text-7xl font-bold font-roslindale text-brown text-center'>
                Experimenta con nosotros la magia de vivir en la Bioconstrucción.
            </h2>
        </div>
        <div className="container w-50 ">
        <Image
         src={magia}
         />
        </div>
    </div>
  )
}

export default Magia