


'use client'
import classNames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";

const NavBar = () => {
    const path = usePathname()

    const links = [
        {label: 'Dashboard', href:'/'},
        {label: 'Issues', href:'/issues'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href={'/'}><FaBug /></Link>
        <ul className='flex space-x-6'>
        {links.map(link=>
            <li key={link.href}>
                <Link className={classNames({
                    'text-zinc-900':link.href===path,
                    'text-zinc-500':link.href!==path,
                    'hover:text-zinc-800 transition-colors':true
                })}href={link.href}>
                    {link.label}
                </Link></li>
        )}
        </ul>
    </nav>
  )
}

export default NavBar