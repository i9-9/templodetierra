import React from 'react'

const Contacto = () => {
  return (
    <div className='container mx-auto bg-yellow w-2/4'>
        <h2 className='text-6xl text-brown font-rosli text-center'>
            Contacto
        </h2>
        <form className='flex flex-col' action="">
        <label htmlFor="name" className="my-4 text-brown">Nombre</label>
        <input
            className="mb-4 border-b-2 text-brown"
            id="name"
            name="name"
            type="text"
            autocomplete="Nombre"
            required
        />
        <label htmlFor="apellido" className="my-4 text-brown">Apellido</label>
        <input
            className="mb-4 border-b-2 text-brown"
            id="last"
            name="last"
            type="text"
            autocomplete="Apellido"
            required
        />
        <label for="comentario" className="my-4 text-brown">Comentario</label>
        <textarea id="comentario" name="comentario" rows="4" cols="50">
        </textarea>
        <button
        type="submit"
        className="px-12 py-2 border justify-center flex border-yellow shadow text-yellow hover:bg-yellow hover:text-brown drop-shadow-sm animate-pulse">
        Enviar
      </button>
        </form>
    </div>
  )
}

export default Contacto