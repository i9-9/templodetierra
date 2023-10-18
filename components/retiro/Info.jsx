import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'


const Info = () => {
  return (
    <div id='info' className='h-screen w-full bg-yellow flex sm:flex-col md:flex-row pt-2 justify-between items-center'>
        <div className='flex flex-col items-center text-center'>
            <h1 className='font-roslindale text-5xl text-brown my-5 justify-center '>Sé parte de la gran obra </h1>
            <p className='text-brown sm:px-5 md:px-40 pb-4'>Templo De Tierra convoca artistas de distintas disciplinas a participar en un retiro de intercambio y conexión intensa con la tierra. Durante una semana, estaremos construyendo, pintando y creando con materiales que nos provee la naturaleza así como también compartiendo desayunos y almuerzos, tardes de playa y fogones por las noches.
            <br></br>
            <br></br>
            Si estás dispuesto a sumarte a la gran obra de bioconstrucción en Punta del Este y desplegar tu creatividad y colaboración para la construcción con otros, esta invitación es para vos. Recibiremos propuestas hasta el <b>27 de octubre.</b></p>
            <Link to='formulario' spy={true} smooth={true} offset={0} duration={500}>
          <button className="px-7 py-1 border flex border-brown text-brown hover:text-green hover:border-green mx-auto md:m-2 shadow-sm">
            Aplicar
          </button>
          </Link>

        </div>
    </div>
  )
}

export default Info