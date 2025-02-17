
'use client'
import { Button, Spinner } from '@radix-ui/themes'
import Link from 'next/link'
import React, { useState } from 'react'

const IssueButtonLink = ({href,label, icon}:{href:string,label:string, icon:React.ReactNode}) => {
  const [loading, setLoading] = useState(false)

  return (
    <div className='max-w-full'>
        <Link href={href}>
            <Button onClick={()=>setLoading(true)}>{loading?<Spinner/>:icon}{label}</Button>
        </Link>
    </div>
  )
}

export default IssueButtonLink