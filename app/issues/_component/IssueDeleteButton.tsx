


'use client'
import { Button, Spinner } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'

const IssueDeleteButton = ({id}:{id:number}) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleDlete=async()=>{
        setLoading(true)
        await axios.delete(`/api/issues/${id}`)
        router.push('/issues')
    }

  return (
    <div>
        <Button onClick={handleDlete} color='red'>{loading?<Spinner/>:<MdDelete/>} Delete Issue</Button>
    </div>
  )
}

export default IssueDeleteButton