"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navigation = () => {
    const pathName = usePathname()//directly takes which url we are in
  return (
    <nav>
        <Link href="/" className={pathName==='/'?"font-bold mr-4":"text-blue-500 mr-4"}>Home</Link>
        <Link href="/about" className={pathName==='/about'?"font-bold mr-4":"text-blue-500 mr-4"}>About</Link>
        <Link href="/products/1" className={pathName==='/products/1'?"font-bold mr-4":"text-blue-500 mr-4"}>Product</Link>
    </nav>
  )
}

export default Navigation