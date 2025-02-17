


import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const badgeProps:Record<Status,{label:string,color:'red'|'purple'|'green'}>={
    OPEN:{label:'Open', color:'red'},
    CLOSED:{label:'Close', color:'green'},
    IN_PROGRESS:{label:'In Progress', color:'purple'}
}

const IssueStatusBadge = ({status}:{status:Status}) => {

  return (
    <div>
        <Badge color={badgeProps[status].color}>
            {badgeProps[status].label}
            </Badge>
    </div>
  )
}

export default IssueStatusBadge