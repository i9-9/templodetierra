import React from 'react';
import Form from './Form';

const Contacto = () => {
  return (
    <div id='contacto' className='container mx-auto bg-yellow md:w-2/4 w-3/4 pb-24 pt-12  '>
        <hr className='my-4 h-px bg-green border-0 ' />
        <h2 className='text-7xl text-brown font-rosli text-center	leading-none  '>
            Contactate <br />
            con nosotros
        </h2>
        <hr className='my-4 h-px bg-green border-0 ' />
        <p className='text-center text-base text-brown'>Calle 9 Esquina 49, 20000 Balneario Buenos Aires, Departamento de Maldonado, Uruguay
        <br />
        <a className='hover:text-green' href='tel:+5491131032348'>
          +54 9 11 3103 2348 
          </a>
          • IG: 
        <a className='hover:text-green' href="https://instagram.com/templodetierra.uy" target="_blank">@templodetierra.uy</a>  
        </p>
          <h2 className='text-brown text-center font-bold my-5'>
            Contactanos por mail: <a className='hover:text-green' href="mailto:templodetierra.ashram@gmail.com">templodetierra.ashram@gmail.com</a>
          </h2>
        {/* <Form /> */}
    </div>
  )
}

export default Contacto