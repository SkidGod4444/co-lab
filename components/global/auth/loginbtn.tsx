import { Button } from '@/components/ui/button'
import { signInWithGitHub } from '@/db/models/firebase.modals'
import { Github } from 'lucide-react'
import React from 'react'

export default function LoginBtn() {
  return (
      <Button onClick={signInWithGitHub}>
         <Github className='h-5 w-5 mr-2'/> Sign in with GitHub
        </Button>
  )
}
