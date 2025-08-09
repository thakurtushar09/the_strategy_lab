'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className=" flex items-center justify-between p-3">
      <div>
        <Image src={'/logo.png'} alt="logo" height={50} width={50} />
      </div>

      <div className="flex gap-6 text-gray-800 text-md">
        <Link href="/">
          <span
            className={`hover:text-black transition cursor-pointer ${
              pathname === '/' ? 'font-bold' : ''
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/services">
          <span
            className={`hover:text-black transition cursor-pointer ${
              pathname === '/services' ? 'font-bold' : ''
            }`}
          >
            Services
          </span>
        </Link>
      </div>

      <div>
        <Link href="/contact">
        <button className="text-white bg-zinc-800 px-4 py-1 rounded-lg cursor-pointer">
          Let’s Talk
        </button>
        </Link>
      </div>


    </div>
  )
}

export default Navbar
