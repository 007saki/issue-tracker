


'use client'
import { Button, TextField } from '@radix-ui/themes'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';

const SimpleMDE = dynamic(()=>import('react-simplemde-editor'),{ssr:false})

interface Props{
    title:string,
    description:string,
}

const IssueForm = () => {
    const {register,control, handleSubmit} = useForm<Props>()
  return (
    <form onSubmit={handleSubmit((data)=>console.log(data))} className='max-w-lg space-y-5'>
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