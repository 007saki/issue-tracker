


'use client'
import { Button } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { MdDelete } from 'react-icons/md'

const IssueDeleteButton = ({id}:{id:number}) => {
    const router = useRouter()

    const handleDlete=async()=>{
        await axios.delete(`/api/issues/${id}`)
        router.push('/issues')
    }

  return (
    <div>
        <Button onClick={handleDlete} color='red'><MdDelete/>Delete Issue</Button>
    </div>
  )
}

export default IssueDeleteButton