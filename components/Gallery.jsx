import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 
import 'swiper/css/autoplay'; 
import S1 from '../public/swiper/S1.png'
import S2 from '../public/swiper/S2.png'
import S3 from '../public/swiper/S3.png'
import Image from 'next/image';
import 'animate.css';



const Gallery = () => {
  return (
    <div id='galeria' className='container mx-auto columns-1 md:columns-2 pt-20 '>
        <div className='container mx-auto flex flex-col justify-center py-40 animate__animated animate__fadeIn '>
            <h2 className='text-5xl text-center lg:text-6xl font-rosli text-brown md:text-left  '>
            Conectá con el mundo que te rodea para encontrarte contigo mismo
            </h2>
            <p className='text-brown text-center text-md md:text-left my-10 p-4 md:p-0'>Podemos coordinar para ti experiencias de conexión natural fuera<br/> del <span className='text-green'>
                Ashram:<br/><br/>
            </span>
            Clases de Surf y de WindSurf<br/>
            Masajes <br/>
            Clases de Paddle<br/>
            Clases de Tenis<br/>
            Excursiones a Sierra de Rocha<br/>
            Visitas al <a className='text-green' href='https://macamuseo.org/'>MACA.</a><br/>
            </p>
        </div>
        <div className='h-full p-4 md:p-0 animate__animated animate_fadeInRight'>
            <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            navigation
            effect={'fade'}
            speed={800}
            slidesPerView={1}
            loop
            autoplay={true}
            
            >
                <SwiperSlide>
                    <Image src={S1} className='object-cover' alt=""></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={S2} className='object-cover' alt=""></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={S3} className='object-cover' alt=""></Image>
                </SwiperSlide>

            </Swiper>
        </div>
    </div>

  )
}

export default Gallery