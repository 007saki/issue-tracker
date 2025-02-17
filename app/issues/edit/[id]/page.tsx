



import { prisma } from '@/prisma/client'
import IssueForm from '../../_component/IssueForm'
import delay from 'delay'

const IssueEditPage = async({params}:{params:Promise<{id:string}>}) => {
    await delay(250)
        const id = (await params).id
        const issue = await prisma.issue.findUnique({where:{id:parseInt(id)}})
        if(!issue) return null;

  return (
    <div>
        <IssueForm issue={issue}/>
    </div>
  )
}

export default IssueEditPage