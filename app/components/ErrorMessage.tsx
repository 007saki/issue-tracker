



import { Text } from '@radix-ui/themes'
import React from 'react'

const ErrorMessage = ({error}:{error:string|undefined}) => {
  return (
    <div>
        <Text color='red'>{error}</Text>
    </div>
  )
}

export default ErrorMessage