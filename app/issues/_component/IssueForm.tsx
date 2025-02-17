


'use client'
import CallOut from '@/app/components/CallOut';
import ErrorMessage from '@/app/components/ErrorMessage';
import { issueSchema } from '@/app/issueSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@radix-ui/themes';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const SimpleMDE = dynamic(()=>import('react-simplemde-editor'),{ssr:false})

    type IssueForm = z.infer<typeof issueSchema>

const IssueForm = () => {
    const {register,control, handleSubmit,formState:{errors}} = useForm<IssueForm>({
        resolver: zodResolver(issueSchema)
    })
    const router = useRouter()
    const [error, setError] = useState('')
  return (
    <div className='space-y-5'>

        {error&&<CallOut label={error} color='red'/>}
        <form onSubmit={handleSubmit(async(data)=>{
            try {
                await axios.post('/api/issues1',data)
                router.push('/issues')
            } catch (error) {
                setError(`${error}`)
            }
        })} className='max-w-lg space-y-5'>

            <TextField.Root {...register('title')} variant='soft' color='purple' placeholder='Enter Issue'/>
            {errors&&<ErrorMessage error={errors.title?.message}/>}
            
            <Controller
            control={control}
            name='description'
            render={({field})=><SimpleMDE{...field} placeholder='Enter Description' />}
            />
            {errors&&<ErrorMessage error={errors.description?.message}/>}
        
            <Button>Add New Issue</Button>
        </form>
    </div>
  )
}

export default IssueForm