

import { prisma } from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import CustomLink from '../components/CustomLink'
import IssueStatusBadge from './_component/IssueStatusBadge'
import NewIssueButton from './_component/NewIssueButton'

const IssuesPage = () => {
  
  const IssueTable=async()=>{
    const issues = await prisma.issue.findMany()
    return(
      <div className='max-w-lg'>
        <Table.Root variant='surface'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map(issue=>
            <Table.Row key={issue.id}>
              <Table.Cell>
                <div><CustomLink href={`/issues/${issue.id}`} label={issue.title}/></div>
                <div className='gap-5 flex md:hidden'>
                  <div><IssueStatusBadge status={issue.status}/></div>
                  <div>{issue.createdAt.toDateString()}</div>
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status} /> </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
            )}

          </Table.Body>
        </Table.Root>
      </div>
    )
  }

  return (
    <div className='space-y-5'>
        <NewIssueButton/>
        <IssueTable />
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default IssuesPage