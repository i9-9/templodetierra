import React from 'react'
import Image from 'next/image'
import logo from '../public/TDT-LOGO.png'
import Link from 'next/link'

const Foot = () => {
  return (
    <footer className="w-full bg-yellow/80 mx-auto px-2">
      <div className='flex flex-row items-center py-3 justify-between'>
        <div className='flex flex-row items-center'>
          <Image
            alt="logo del templo de tierra"
            src={logo}
            placeholder="blur"
            width={35}
            height={30}
          />
          <Link href="https://templodetierra.com/">
            <h5 className='text-sm font-roslindale text-brown hover:underline cursor-pointer'>
            Templo de Tierra
            </h5>
          </Link>
        </div>
          <span className="text-xs text-brown sm:text-center">
             © 2022 
          </span>
      </div>
    </footer>

  )
}

export default Foot;