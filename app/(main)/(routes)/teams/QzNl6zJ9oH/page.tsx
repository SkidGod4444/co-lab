import {AuditTable, ChatCard, RepoCard, RepoSettings, TeamMemsCard, TodoTable} from '@/components/global/teams/team.items'
import React from 'react'

export default function RandomTeamPage() {
  return (
    <div className='w-auto'>
      <div className="flex items-center gap-x-5">
      <RepoCard />
      <TeamMemsCard />
      {/* <TodoTable /> */}
      <ChatCard />
    </div>
    <div className="flex justify-between mt-5 gap-x-5">
      <RepoSettings />
      <AuditTable />
      
    </div>
    </div>
  )
}
