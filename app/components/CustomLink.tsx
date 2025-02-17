


import { Link as RadixLink } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const CustomLink = ({label, href}:{label:string,href:string}) => {
  return (
    <div>
        <Link href={href} legacyBehavior>
            <RadixLink>{label}</RadixLink>
        </Link>
    </div>
  )
}

export default CustomLink