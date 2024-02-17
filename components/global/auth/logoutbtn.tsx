import { Button } from '@/components/ui/button'
import { SignOut } from '@/db/models/firebase.modals'
import { LogOut } from 'lucide-react'
import React from 'react'

export default function LogOutBtn() {
  return (
    <Button onClick={SignOut} variant="ghost">
        <LogOut className='w-4 h-4 mr-2' /> Logout
    </Button>
  )
}
