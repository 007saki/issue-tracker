



import { Callout } from '@radix-ui/themes'
import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'

const CallOut = ({label,color}:{label:string,color:'red'|'green'|'purple'}) => {
  return (
    <div>
        <Callout.Root color={color}>
            <Callout.Icon>
                <BiInfoCircle />
            </Callout.Icon>
            <Callout.Text>
                {label}
            </Callout.Text>
        </Callout.Root>
    </div>
  )
}

export default CallOut