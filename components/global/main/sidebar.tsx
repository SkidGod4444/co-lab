import React from 'react'
import UserItem from './user.item'
import { PlusCircle, Search, Settings } from 'lucide-react'
import { Item } from './items'
import { TeamList } from './team.list'
import { getAuth } from 'firebase/auth'
import { randomIntGen, writeTeamData } from '@/db/models/firebase.modals'
import { toast } from 'sonner'

export default function SideBar() {
   const handleTeamCreate = () => {
    const User =  getAuth().currentUser;
    if (User) {
      writeTeamData({
        id: randomIntGen(),
        name: "Undefined",
        teamOwner: User.uid,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    toast.success("Team created successfully");
  }
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
