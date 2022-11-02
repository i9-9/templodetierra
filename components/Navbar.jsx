import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image';
import logo from '../public/TDT-LOGO.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('#F6DD8B')
    const [textColor, setTextColor] = useState('#6E4C1B')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90){
                setColor('transparent')
                setTextColor('#000000')
            } 
            else {
                setColor('transparent')
                setTextColor('#FFFFFF')
            }
        }
        window.addEventListener('sc roll', changeColor);
    }, []);



  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
        <div className='max-w-[1500px] flex justify-between items-center p-1 text-brown'>
            <Link href='/'>
                <h1 style={{color: `${textColor}`}} >
                    <Image
                        alt="logo del templo de tierra"
                        src={logo}
                        placeholder="blur"
                        />
                </h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex items-center'>
                <li className='px-4 py-2 hover:text-green' >
                    <Link href='/'>El Templo</Link>
                </li>
                <li className='px-4 py-2 hover:text-green'>
                    <Link href='/'>Retiros y eventos</Link>
                </li>
                <li className='px-4 py-2 hover:text-green'>
                    <Link href='/'>Reservas</Link>
                </li>
                <li className='px-4 py-2 hover:text-green'>
                    <Link href='/'>
                        <button className='outline outline-1 px-2 py-2 flex justify-self-center'>Contacto</button>
                    </Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? 
                (<AiOutlineClose style={{color: `${textColor}`}} size={20} />) : (<AiOutlineMenu style={{color: `${textColor}`}} size={20} />)
                }
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
            <ul>
                <li className='p-4 text-4xl hover:text-green'>
                    <Link href='/'>El Templo</Link>
                </li>
                <li className='p-4 text-4xl hover:text-green'>
                    <Link href='/'>Retiros y eventos</Link>
                </li>
                <li className='p-4 text-4xl hover:text-green'>
                    <Link href='/'>Reservas</Link>
                </li>
                <li className='p-4 text-4xl hover:text-green'>
                    <Link href='/'>Contacto</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar