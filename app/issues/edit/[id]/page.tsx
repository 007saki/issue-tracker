



import { prisma } from '@/prisma/client'
import IssueForm from '../../_component/IssueForm'

const IssueEditPage = async({params}:{params:Promise<{id:string}>}) => {
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