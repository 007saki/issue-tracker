


'use client'
import { Button, TextField } from '@radix-ui/themes'
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

const SimpleMDE = dynamic(()=>import('react-simplemde-editor'),{ssr:false})

interface Props{
    title:string,
    description:string,
}

const IssueForm = () => {
    const {register,control, handleSubmit} = useForm<Props>()
    const router = useRouter()
  return (
    <form onSubmit={handleSubmit(async(data)=>{
        await axios.post('/api/issues',data)
        router.push('/issues')
    })} className='max-w-lg space-y-5'>
        <TextField.Root {...register('title')} variant='soft' color='purple' placeholder='Enter Issue'/>

        <Controller
        control={control}
        name='description'
        render={({field})=><SimpleMDE{...field} placeholder='Enter Description' />}
        />
        
        <Button>Add New Issue</Button>
    </form>
  )
}

export default IssueForm