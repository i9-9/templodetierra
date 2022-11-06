import React from 'react';
import Image from 'next/image'
import { Carousel } from 'flowbite-react';
import Car1 from '../public/1-carousel.png';
import Car2 from '../public/2-carousel.png';
import Car3 from '../public/3-carousel.png';

const Proposito = () => {
  return (
    <div className='md:columns-2 h-100'>
        <div className="container lg:w-50 hidden lg:block ">
            <Carousel>
                <Image
                src={Car1}
                alt='carru'
                objectFit="cover"
                
                />
                <Image
                src={Car2}
                alt='carru2'
                width={710}
                height={1024}
                objectFit="cover"
                
                />
                <Image
                src={Car3}
                alt="carru3"
                width={710}
                height={1024}
                objectFit="cover"
                
                />
            </Carousel>
        </div>
        <div className="container w-50 bg-yellow h-screen mt-20">
            <h2 className='text-5xl lg:text-6xl font-bold font-roslindale text-brown text-center'>
                Canalizado con el propósito <br/> de ser un lugar de retiro para <br/> el alma, proponiendo un espacio y actividades que <br/> puedan generar <br/> transformaciones a nivel <br/> interno en cada individuo. 
            </h2>
                <p className='text-brown text-center my-10 text-lg'>Bioconstrucción con barro | Arte | Prácticas para el espíritu | cocina natural. </p>
        </div>
    </div>
  )
}

export default Proposito