import React from 'react';
import Image from 'next/image';
import Habitacion1 from '../public/habitaciones/hab1.png'
import Habitacion2 from '../public/habitaciones/hab2.png'
import Habitacion3 from '../public/habitaciones/hab3.png'
import Habitacion4 from '../public/habitaciones/hab4.png'

const Hospedaje = () => {
  return (
    <>
    <div className='container mx-auto my-32 bg-yellow flex flex-col columns-2 md:columns-4'>
      <div className="container flex columns-2 mb-6 flex-col sm:flex-row text-center md:text-left">
        <h2 className='text-6xl font-rosli text-brown w-full md:w-4/5 text-center md:text-left '>
          Hospedaje para el espíritu
        </h2>
        <h4 className='text-xs text-brown mt-4'>
        Conviviendo siempre con lo mejor de sí. Nuestras <br/> habitaciones están intencionadas para observar y sentir <br/> la naturaleza fundirse con nuestro propio ser.
        </h4>
      </div>
      <div className="container columns-1 md:columns-4 flex">
        <div>
          <Image
          src={Habitacion1}
          >

          </Image>
          <h2 className='font-rosli text-brown text-xl mb-2'>
            Habitacion Golden Temple
          </h2>
          <p className='text-sm text-brown mb-2'>
            Privada para 2 personas. Cama doble, baño propio con bañera, zona chill, mini cocina.
          </p>
          <button className='text-xs px-6 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0 mb-2'>Reservar
          </button>
        </div>
        <div>
          <Image
          src={Habitacion2}
          >

          </Image>
          <h2 className='font-rosli text-brown text-xl mb-2'>
            Habitacion Golden Temple
          </h2>
          <p className='text-sm text-brown mb-2'>
            Privada para 2 personas. Cama doble, baño propio con bañera, zona chill, mini cocina.
          </p>
          <button className='text-xs px-6 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0 mb-2'>Reservar
          </button>
        </div>
        <div>
          <Image
          src={Habitacion3}
          >

          </Image>
          <h2 className='font-rosli text-brown text-xl mb-2'>
            Habitacion Golden Temple
          </h2>
          <p className='text-sm text-brown mb-2'>
            Privada para 2 personas. Cama doble, baño propio con bañera, zona chill, mini cocina.
          </p>
          <button className='text-xs px-6 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0 mb-2'>Reservar
          </button>
        </div>
        <div>
          <Image
          src={Habitacion4}
          >

          </Image>
          <h2 className='font-rosli text-brown text-xl mb-2'>
            Habitacion Golden Temple
          </h2>
          <p className='text-sm text-brown mb-2'>
            Privada para 2 personas. Cama doble, baño propio con bañera, zona chill, mini cocina.
          </p>
          <button className='text-xs px-6 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0 mb-2'>Reservar
          </button>
        </div>
      </div>
      {/* <p className='text-xs text-brown mt-10'>
      ***Servicio de desayuno incluído*** <br/>
      ***Incluída clase de yoga y meditación a la mañana***<br/>
      ***todas las habitaciones tienen vista al mar y al amanecer***<br/>
      </p> */}
      <div className="container">
      <hr className='border-green mb-4 mt-10'/>
      <div className="container columns-3 flex flex-row justify-between my-4">
        <p className='text-green animate-pulse text-xs'>
        Servicio de desayuno incluído
        </p>
        <p className='text-green animate-pulse text-xs'>
        Incluída clase de yoga y meditación a la mañana
        </p>
        <p className='text-green animate-pulse text-xs'>
        Todas las habitaciones tienen vista al mar y al amanecer
        </p>
        </div>  
      <hr className='border-green my-4' />

      </div>
    </div>
    </>
  )
}

export default Hospedaje