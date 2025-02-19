

import IssueButtonLink from '@/app/components/IssueButtonLink'
import { prisma } from '@/prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import Markdown from 'react-markdown'
import IssueDeleteButton from '../_component/IssueDeleteButton'
import IssueStatusBadge from '../_component/IssueStatusBadge'
import { BiEdit } from 'react-icons/bi'
import { getServerSession } from 'next-auth'
import authOptions from '@/app/api/auth/AuthOptions'


const IssueDetailsPage =async ({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id
      const session = await  getServerSession(authOptions)

    const issues = await prisma.issue.findUnique({
        where:{id: parseInt(id)}
    })

    if(!issues) return null;

  return (
    <div className=' space-y-3 md:grid grid-cols-2 md:max-w-full gap-5'>
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
        {session &&
            (<div className='gap-5 flex flex-col'>
                <IssueButtonLink icon={<BiEdit/>} href={`/issues/edit/${issues.id}`} label='Edit Issue' />
                <IssueDeleteButton id={issues.id}/>
            </div>)
        }
    </div>
  )
}

export default IssueDetailsPage