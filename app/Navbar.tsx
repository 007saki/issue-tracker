
'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBug } from 'react-icons/fa'

const Navbar = () => {
  const currentPath = usePathname()
  const links = [
    {href:'/', label:'Dashboard'},
    {href:'/issues', label:'Issues'},
  ]
  return (
    <nav className={'flex gap-5 px-5 items-center h-10 border-b mb-5'}>
        <Link href={'/'}><FaBug color='purple'/></Link>
        {links.map(link=>
          <ul key={link.href}>
            <li><Link
            className={classNames({
              'text-zinc-900':currentPath===link.href,
              'text-zinc-500':currentPath!==link.href,
              'transition-colors':true,
              'hover:text-zinc-900':true,
              
            })}
            href={link.href}>{link.label}</Link></li>
          </ul>
        )}
    </nav>
  )
}

export default Navbar