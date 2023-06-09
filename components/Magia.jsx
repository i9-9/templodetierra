import React from "react";
import Image from "next/image";
import index from "../public/index.png";
import { Link } from "react-scroll";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Magia = () => {
  return (
    <div
      id="magia"
      className="container flex bg-yellow mx-auto items-center flex-col sm:flex-row pt-20"
    >
      <div className="container bg-yellow animate__animated animate__fadeIn">
        <h2 className="text-5xl text-center lg:text-6xl font-rosli text-brown md:text-left">
          Experimentá con <br />
          nosotros la magia de
          <br />
          vivir en la Bioconstrucción.
        </h2>
        <p className="text-brown text-center my-10 text-md md:text-left ">
          Ubicado en Balneario Buenos Aires,
          <br />
          Punta del Este, Uruguay.
          <br /> A pocos metros del Océano Atlántico.
        </p>
        <Link to="proposito" spy={true} smooth={true} offset={0} duration={500}>
          <button className="px-12 py-2 border flex border-green text-green hover:text-brown hover:border-brown mx-auto md:m-0 shadow-sm">
            Conocer más
          </button>
        </Link>
      </div>
      <div className=" container md:flex justify-end relative ease-in duration-300 p-10 xs:p-0  animate__animated animate__fadeInRight">
        <div className="shadow-sm rounded-full h-fit">
          <Image src={index} height={651} width={580} />

        </div>
      </div>
    </div>
  );
};

export default Magia;
