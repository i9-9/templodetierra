import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'

const Title = () => {
  return (
    <div className='max-h-screen'>
      <div className='relative text-center'>
        <Image src="/6-retiro.png" width={1640} height={860}/>
        <div className='absolute top-2/4 flex flex-col items-center w-full'>
          <h1 className='font-roslindale text-yellow text-center text-6xl'>Retiro de intercambio y arte</h1>
          <p className='font-lane text-center text-white text-xl'>Convocatoria abierta a artistas de distintas disciplinas</p>
          <Link to='info' spy={true} smooth={true} offset={0} duration={500}>
          <button className="px-7 py-1 border flex border-yellow text-yellow hover:text-brown hover:border-brown mx-auto md:m-2 shadow-sm">
            Más info
          </button>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default Title