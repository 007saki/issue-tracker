

import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssueButtonLink = ({href,label, icon}:{href:string,label:string, icon:React.ReactNode}) => {
  return (
    <div className='max-w-full'>
        <Link href={href}>
            <Button>{icon}{label}</Button>
        </Link>
    </div>
  )
}

export default IssueButtonLink