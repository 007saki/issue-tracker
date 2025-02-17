



import { Card, Skeleton } from '@radix-ui/themes'

const DetailsLoadingPage = () => {
  return (
    <div className=' space-y-3 md:grid grid-cols-2 md:max-w-full gap-5'>
        <div className='space-y-5 max-w-sm'>
            <Skeleton height={'2rem'}/>
            <Card className='prose'>
                <Skeleton height={'20rem'}/>
            </Card>
        </div>
        <div className='gap-5 flex flex-col max-w-sm'>
            <Skeleton/>
            <Skeleton/>
        </div>
    </div>
  )
}

export default DetailsLoadingPage