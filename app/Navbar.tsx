
'use client'
import { Avatar, Box, DropdownMenu, Text } from '@radix-ui/themes'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBug } from 'react-icons/fa'

const Navbar = () => {
  const{status, data:session}=useSession()

  const currentPath = usePathname()
  const links = [
    {href:'/', label:'Dashboard'},
    {href:'/issues', label:'Issues'},
  ]

  const Login=()=>{
    return (
      <Box className='px-10'>
        {status==='authenticated'&&
          <DropdownMenu.Root >
            <DropdownMenu.Trigger>
            <Avatar referrerPolicy='no-referrer' className='hover:cursor-pointer' fallback='?' src={session.user!.image!} size={'3'} radius='full'/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>
                <Text size={'2'}>{session.user?.email}</Text>
              </DropdownMenu.Label>
              <DropdownMenu.Item>
                <Link href={'/api/auth/signout'}>Logout</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          }
          {status==='unauthenticated'&&<Link href={'/api/auth/signin'}>Login</Link>}
      </Box>
    )
  }

  const LinksComponent=()=>{
    return(
        <Box className='flex gap-5 items-center'>
              <Link href={'/'}><FaBug color='purple'/></Link>
              {links.map(link=>
                <ul key={link.href}>
                  <li><Link
                  className={classNames({
                    'text-zinc-900':currentPath===link.href,
                    'text-zinc-500':currentPath!==link.href,
                    'transition-colors':true,
                    'hover:text-zinc-900':true,
                  })}
                  href={link.href}>{link.label}</Link></li>
                </ul>
              )}
            </Box>
      )
  }

  return (
    <nav className={'flex gap-5 px-5 items-center h-10 border-b mb-5 justify-between'}>
        <LinksComponent/>
        <Login/>

    </nav>
  )
}

export default Navbar