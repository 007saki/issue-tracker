


'use client'
import { Button, TextField } from '@radix-ui/themes'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';

const SimpleMDE = dynamic(()=>import('react-simplemde-editor'),{ssr:false})


const IssueForm = () => {
  return (
    <div className='max-w-lg space-y-5'>
        <TextField.Root variant='soft' color='purple' placeholder='Enter Issue'/>
        <SimpleMDE />
        <Button>Add New Issue</Button>
    </div>
  )
}

export default IssueForm