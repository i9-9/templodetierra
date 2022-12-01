import React from 'react'


const Contacto = () => {
  return (
    <div id='contacto' className='container mx-auto bg-yellow md:w-2/4 w-3/4 pb-20 pt-12  '>
        <hr className='my-4 h-px bg-green border-0 ' />
        <h2 className='text-7xl text-brown font-rosli text-center	leading-none  '>
            Contactate <br />
            con nosotros
        </h2>
        <hr className='my-4 h-px bg-green border-0 ' />
        <p className='text-center text-base text-brown'>Calle 9 Esquina 49, 20000 Balneario Buenos Aires, Departamento de Maldonado, Uruguay
        <br />
        Whatsapp +54 9 11 3103 2348 • IG: 
           @templodetierra.uy 
        </p>
        <form className='flex flex-col' action="">
        <label htmlFor="name" className="my-4 text-brown">Nombre</label>
        <input
            className="mb-2 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5" 
            id="name"
            name="name"
            type="text"
            autocomplete="Nombre"
            required
        />
        <label htmlFor="apellido" className="my-4 text-brown">Apellido</label>
        <input
            className="mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5"
            id="last"
            name="last"
            type="text"
            autocomplete="Apellido"
            required
        />
        <label for="comentario" className="my-4 text-brown">Comentario</label>
        <textarea id="comentario" name="comentario" rows="4" cols="50" className='mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5'>
        </textarea>
        <button
          type="submit"
          className="px-12 py-2 border justify-center flex my-2 border-brown shadow text-brown hover:bg-yellow hover:text-brown drop-shadow-sm animate-pulse">
          Enviar
        </button>
        </form>
    </div>
  )
}

export default Contacto