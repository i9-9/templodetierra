import React from 'react';
import Image from 'next/image';
import magia from '../public/magia.png'

const Magia = () => {
  return (
    <div className='md:columns-2 h-100'>
        <div className="container w-50 bg-yellow h-screen mt-20">
            <h2 className='text-5xl lg:text-7xl font-bold font-roslindale text-brown text-center'>
                Experimentá con <br/>
                nosotros la magia de 
                <br/>vivir en la Bioconstrucción.
            </h2>
            <p className='text-brown text-center my-10 text-lg'>Ubicado en Balneario Buenos Aires,<br/> Punta del Este, Uruguay.<br/> A pocos metros del Océano Atlántico.</p>
            <div className='flex justify-center p-4'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.644381513233!2d-54.80372908467533!3d-34.8902752803863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x957503b16e89a2a3%3A0xf8b2c971241f0f72!2sTemplo%20de%20Tierra!5e0!3m2!1sen!2sar!4v1667407882655!5m2!1sen!2sar" width="600" height="450"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
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