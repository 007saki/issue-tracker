

'use client'
import { Button, DropdownMenu } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import React from 'react'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'

const AssigneeSelect = () => {
    const {data:session} = useSession()
  return (
    <div>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button variant='soft'> <MdOutlineArrowDropDownCircle />Assign User</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item>
                    {session?.user?.name}
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
  )
}

export default AssigneeSelect