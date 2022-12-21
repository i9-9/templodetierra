import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    <form className='flex flex-col' ref={form} onSubmit={sendEmail} action="">
        <label htmlFor="name" className="my-4 text-brown">Nombre</label>
        <input
            className="mb-2 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5" 
            id="name"
            name="user_name"
            type="text"
            autoComplete="Nombre"
            required
        />
        <label htmlFor="email" className="my-4 text-brown">Email</label>
        <input
            className="mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5 active:ring-green"
            id="last"
            name="user_email"
            type="email"
            autoComplete="Email"
            required
        />
        <label htmlFor="comentario" className="my-4 text-brown">Comentario</label>
        <textarea id="comentario" name="comentario" rows="4" cols="50" className='mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5'>
        </textarea>
        <button
        type="submit"
        className="px-12 py-2 border justify-center flex my-2 border-brown shadow text-brown hover:bg-yellow hover:text-green hover:border-green drop-shadow-sm animate-pulse">
        Enviar
        </button>
    </form>
  )
}

export default Form