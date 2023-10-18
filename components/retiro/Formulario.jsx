import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const [toSend, setToSend] = useState({
    name: "",
    to_name: "",
    area_artistica: "",
    aporte: "",
    interes: "",
    bioconstruccion: "",
    disponibilidad: "",
    reply_to: "",
  });
  const [alert, setAlert] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_pq8i785", "template_e13vty5", toSend, "GJiujgEqWf31MwQ")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setAlert(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setAlert(true);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form id='formulario' className='flex flex-col bg-yellow sm:px-2 sm:py-4 md:py-12 md:px-24' onSubmit={onSubmit} action="">
        <h1 className='text-brown font-roslindale sm:text-2xl lg:text-5xl text-center'>Retiro de intercambio y arte</h1>
        <label htmlFor="name" className="my-4 text-sm text-brown">Nombre</label>
        <input
            className="mb-2 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5" 
            id="name"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
            type="text"
            autoComplete="Nombre"
            required
        />
        <label htmlFor="email" className="my-4 text-sm text-brown">Email</label>
        <input
            className="mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5 active:ring-green"
            id="last"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
            type="email"
            autoComplete="Email"
            required
        />
        <label htmlFor="area-artistica" className="my-4 text-sm text-brown">¿En qué área artística te desarrollas?</label>
        <textarea id="area-artistica" name="area_artistica" value={toSend.area_artistica} onChange={handleChange}
rows="4" cols="50" className='mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5'>
        </textarea>
        <label htmlFor="aporte" className="my-4 text-sm text-brown">¿Qué sentís que podés aportar al Templo desde la construcción, colaboración o lo humanitario?</label>
        <textarea id="aporte" name="aporte" value={toSend.aporte} onChange={handleChange} rows="4" cols="50" className='mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5'>
        </textarea>
        <label htmlFor="interes" className="my-4 text-sm text-brown">¿Por qué estás interesado/a en realizar el intercambio?</label>
        <textarea id="interes" name="interes" value={toSend.interes} onChange={handleChange} rows="4" cols="50" className='mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5'>
        </textarea>
        <label htmlFor="bioconstruccion" className="my-4 text-sm text-brown">¿Qué conocimientos tenés acerca del cuidado de la Tierra y la bioconstrucción?</label>
        <textarea id="bioconstruccion" name="bioconstruccion" value={toSend.bioconstruccion} onChange={handleChange} rows="4" cols="50" className='mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5'>
        </textarea>
        <label htmlFor="disponibilidad" className="my-4 text-sm text-brown">¿Contás con disponibilidad desde el 01/12 hasta el 10/12 para formar parte de la aventura? Se incluirá el alojamiento y menú de desayuno y almuerzo entre todos. Contaremos con un cronograma de 6 horas de construcción y obra, para que luego puedas disfrutar la playa a metros del Ashram y fogones entre todos por las noches.</label>
        <textarea id="disponibilidad" name="disponibilidad" value={toSend.disponibilidad} onChange={handleChange} rows="4" cols="50" className='mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5'>
        </textarea>
        <button
        type="submit"
        value="send"
        className="px-12 py-2 border justify-center flex my-2 border-brown shadow text-brown hover:bg-yellow hover:text-green hover:border-green drop-shadow-sm animate-pulse">
        Enviar
        </button>
    </form>
  )
}

export default Formulario