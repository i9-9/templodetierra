import React, {useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image';
import logo from '../public/TDT-LOGO.png';
import { Link } from 'react-scroll';
import NextLink from 'next/link';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('#F6DD8B');
    const [textColor, setTextColor] = useState('#6E4C1B');

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
        <div className='max-w-[1500px] flex justify-between items-center text-brown'>
            <Link to='hero' spy={true} smooth={true} offset={0} duration={500}>
                <h1 style={{color: `${textColor}`}} className='cursor-pointer ml-2 mt-1' >
                    <Image
                        alt="logo del templo de tierra"
                        src={logo}
                        width={51}
                        height={43}
                        />
                </h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex items-center'>
                <li className='px-4 py-2 hover:text-green text-sm hover:cursor-pointer' >
                    <Link to='magia' spy={true} smooth={true} offset={0} duration={500}>El Templo</Link>
                </li>
                <li className='px-4 py-2 hover:text-green text-sm hover:cursor-pointer'>
                    <Link to='puertas' spy={true} smooth={true} offset={0} duration={500}>¿Dónde?</Link>
                </li>
                <li className='px-4 py-2 hover:text-green text-sm hover:cursor-pointer'>
                    <NextLink href="/retiro">Convocatoria a artistas</NextLink>
                </li>
                <li className='px-4 py-2 hover:text-green text-sm'>
                    <Link to='contacto' spy={true} smooth={true} offset={0} duration={500}>
                    <button className='outline outline-1 px-2 py-2 flex justify-self-center cursor-pointer'>Contacto</button>
                    </Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10 mr-2'>
                {nav ? 
                (<AiOutlineClose style={{color: `${textColor}`}} size={20} />) 
                : 
                (<AiOutlineMenu style={{color: `${textColor}`}} size={20} />)
                }
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
            <ul>
                <li onClick={handleNav} className='p-4 text-3xl hover:text-green hover:cursor-pointer'>
                    <Link to='magia' onClick={handleNav} spy={true} smooth={true} offset={0} duration={500}>El Templo</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-3xl hover:text-green hover:cursor-pointer'>
                    <Link to='puertas' onClick={handleNav} spy={true} smooth={true} offset={0} duration={500}>¿Dónde?</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-3xl hover:text-green hover:cursor-pointer'>
                    <Link to='contacto' onClick={handleNav} spy={true} smooth={true} offset={0} duration={500}>Contacto</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar