

import Link from 'next/link'
import React from 'react'
import { FaBug } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className={'flex gap-5 px-5 items-center h-10 border-b mb-5'}>
        <Link href={'/'}><FaBug color='purple'/></Link>
        <ul className={'flex gap-5'}>
            <li><Link href={'/'}>Dashboard</Link></li>
            <li><Link href={'/Issues'}>Issues</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar