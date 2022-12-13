import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Hero = ({heading, subheading}) => {
  return (
    <div id='hero' className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#6E4C1C]/40 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[36] flex flex-col items-center'>
            <h2 className='text-8xl font-bold font-roslindale text-yellow text-center'>{heading}</h2>
            <p className='ml-2 pb-5 text-3xl font-lane tracking-[0.37em] text-center text-yellow '>{subheading}</p>
            <div className='flex justify-center'>
                <div>
                    <Link className='pointer' to='magia' spy={true} smooth={true} offset={0} duration={500}>
                        <button className=' px-12 py-2 border justify-center flex border-yellow shadow text-yellow hover:bg-yellow hover:text-brown drop-shadow-sm animate-pulse pointer '>Entrar
                            <div className='p-1 ml-1 pointer'>
                                <AiOutlineArrowDown />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero 


