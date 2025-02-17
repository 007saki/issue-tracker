


import { Skeleton } from '@radix-ui/themes'
import React from 'react'

const NewIssueLoadingPage = () => {
  return (
    <div className='space-y-5 max-w-lg'>
        <Skeleton/>
        <Skeleton height={'20rem'}/>
    </div>
  )
}

export default NewIssueLoadingPage