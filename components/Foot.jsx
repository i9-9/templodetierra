import React from 'react'
import Image from 'next/image'
import logo from '../public/TDT-LOGO.png'
import Link from 'next/link'


const Foot = () => {
  return (
    <div className="container mt-4 mx-auto max-w md:flex md:items-center w-full">
      <hr className='border-green'
       />
      <div className='flex'>
        <div className='flex flex-row items-center py-3'>
        <Image
                        alt="logo del templo de tierra"
                        src={logo}
                        placeholder="blur"
                        width={35}
                        height={30}
                        />
          <h5 className='text-sm font-roslindale text-brown'>
            Templo de Tierra
          </h5>
          <span className="text-xs text-brown sm:text-center">
            © 2022 
          <Link href="https://templodetierra.com/" className="hover:underline">
            TDT
          </Link>
          </span>
        </div>
        <div>

        </div>
      </div>
    </div>

  )
}

export default Foot