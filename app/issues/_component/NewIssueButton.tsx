

'use client'
import { Button, Spinner } from '@radix-ui/themes'
import Link from 'next/link'
import React, { useState } from 'react'

const NewIssueButton = () => {
    const [loading, setLoading] = useState(false)

  return (
    <div>
        <Button onClick={()=>setLoading(true)}>
            {loading&&<Spinner/>}
            <Link href={'/issues/new'}>Add New Issue</Link>
        </Button>
    </div>
  )
}

export default NewIssueButton