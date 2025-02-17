



import { Skeleton } from '@radix-ui/themes'
import React from 'react'

const IssueEditLoadingPage = () => {
  return (
    <div className='max-w-lg space-y-5'>
        <Skeleton/>
        <Skeleton height={'20rem'}/>
    </div>
  )
}

export default IssueEditLoadingPage