


import { prisma } from '@/prisma/client'
import { Button, Card, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import IssueStatusBadge from '../_component/IssueStatusBadge'
import Markdown from 'react-markdown'
import { FcDeleteRow } from 'react-icons/fc'
import { FiDelete } from 'react-icons/fi'
import { LuDelete } from 'react-icons/lu'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

const IssueDetailsPage =async ({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id

    const issues = await prisma.issue.findUnique({
        where:{id: parseInt(id)}
    })

    if(!issues) return null;

  return (
    <div className=' space-y-3 md:grid grid-cols-2 md:max-w-full '>
        <div className='space-y-5'>
            <Heading>{issues?.title}</Heading>
            <Flex className='gap-5'>
                <IssueStatusBadge status={issues?.status} />
                <Text className='italic'>{issues.createdAt.toDateString()}</Text>
            </Flex>
            <Card className='prose'>
                <Markdown>
                    {issues.description}
                </Markdown>
            </Card>
        </div>
        <div className='gap-5 flex flex-col'>
                    <Button><FaEdit />Edit Issue</Button>
                    <Button variant='soft' color='red'><MdDelete color='red' size={'15'} />Delete Issue</Button>
        </div>
    </div>
  )
}

export default IssueDetailsPage