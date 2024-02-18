import React from 'react'
import UserItem from './user.item'
import { PlusCircle, Search, Settings } from 'lucide-react'
import { Item } from './items'
import { TeamList } from './team.list'
import { handleTeamCreate } from '@/app/(main)/(routes)/dashboard/page'

export default function SideBar() {
  return (
    <>
    <div>
      <UserItem />
      <Item onClick={() => {}} label='Search' icon={Search} isSearch/>
      <Item onClick={() => {}} label='Settings' icon={Settings}/>
      <Item onClick={handleTeamCreate} label="New Team" icon={PlusCircle}/>
    </div>
    <div className='mt-4'>
      <TeamList />
      {/* {teams?.map((team) => (
        <p key={team?.id}>
        {team?.name}
        </p>
      ))} */}
    </div>
    </>
  )
}
