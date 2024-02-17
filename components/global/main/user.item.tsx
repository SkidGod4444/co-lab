"use client";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUser } from '@/db/models/firebase.modals';
import { ChevronsLeftRight } from 'lucide-react';
import React from 'react'
import LogOutBtn from '../auth/logoutbtn';

export default function UserItem() {
    const User = useUser();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div role='button' className='flex items-center text-sm p-3 w-full hover:bg-primary/15 rounded-md'>
                <div className='gap-x-2 flex items-center max-w-[150px]'>
                    <Avatar className='h-7 w-7'>
                        <AvatarImage src={User?.photoURL || "/assets/COlab-logo.png"} alt={User?.displayName || "logo"} />
                    </Avatar>
                    <span className='text-start font-medium line-clamp-1'>
                        {User?.displayName}
                    </span>
                </div>
                <ChevronsLeftRight className='h-4 w-4 ml-auto rotate-90 text-muted-foreground' />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-auto px-3' align='start' alignOffset={11} forceMount>
            <div className='flex flex-col space-y-4 p-2'>
                <p className='text-xs font-medium leading-none text-muted-foreground'>
                    {User?.email}
                </p>
                <div className='flex items-center gap-x-2'>
                    <div className='rounded-md bg-secondary p-1'>
                        <Avatar className='h-8 w-8'>
                            <AvatarImage src={User?.photoURL || "/assets/COlab-logo.png"} alt={User?.displayName || "logo"} />
                        </Avatar>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-sm line-clamp-1'>
                            {User?.displayName}
                        </p>
                    </div>
                </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className='w-full cursor-pointer text-muted-foreground'>
                <LogOutBtn />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
