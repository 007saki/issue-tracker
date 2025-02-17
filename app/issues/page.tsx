


import { prisma } from '@/prisma/client'
import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {


  const IssueTable=async()=>{
    const issues = await prisma.issue.findMany()
    return(
      <div>
        <Table.Root variant='surface'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map(issue=>
            <Table.Row key={issue.id}>
              <Table.Cell>{issue.title}</Table.Cell>
              <Table.Cell>{issue.status}</Table.Cell>
              <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
            )}

          </Table.Body>
        </Table.Root>
      </div>
    )
  }
  return (
    <div className='space-y-5'>
        <Button>
            <Link href={'/issues/new'}>Add New Issue</Link>
        </Button>
        <IssueTable />
    </div>
  )
}

export default IssuesPage