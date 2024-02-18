import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar'
import { ChevronDown } from 'lucide-react'

export function TeamMemsCard() {
  return (
    <Card>
  <CardHeader>
    <CardTitle>Manage Members</CardTitle>
    <CardDescription>Invite your team members to collaborate.</CardDescription>
  </CardHeader>
  <CardContent>
  <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/assets/kkk.jpg" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Sunny Deol</p>
              <p className="text-sm text-muted-foreground">fufu@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/assets/nany.jpg" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Manisha</p>
              <p className="text-sm text-muted-foreground">m@example.com</p>
            </div>
          </div>
          </div>
  </CardContent>
</Card>

  )
}

export function RepoCard() {
  return (
    <Card className='w-auto h-1/2'>
  <CardHeader>
    <CardTitle>Choose Repositories</CardTitle>
    <CardDescription>You can only select one repo to continue with.</CardDescription>
  </CardHeader>
  <CardContent>
  <div className='text-sm flex items-center'>
  <span>CO-lab</span>
  <ChevronDown className='h-5 w-5 ml-1' />
</div>

  </CardContent>
</Card>

  )
}

 
type CardProps = React.ComponentProps<typeof Card>


export function RepoSettings({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Manage Settings</CardTitle>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-bold leading-none">
              Watch Issues
            </p>
            <p className="text-sm text-muted-foreground">
              Will try to solve issues automatically.
            </p>
          </div>
          <Switch />
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-bold leading-none">
              Watch Commits
            </p>
            <p className="text-sm text-muted-foreground">
              Fetch commits and analyze them.
            </p>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  )
}
const todos = [
  {
    task: "TASK0324",
    taskStatus: "Pending",
    priority: "Low",
  },
  {
    task: "TASK034",
    taskStatus: "Pending",
    priority: "High",
  },
  {
    task: "TASK04",
    taskStatus: "Completed",
    priority: "Medium",
  }
]

export function TodoTable (){
  return (
    <Table className='w-1/2 h-1/2'>
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Tasks</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.task}>
            <TableCell className="font-medium">{todo.task}</TableCell>
            <TableCell>{todo.taskStatus}</TableCell>
            <TableCell className="text-right">{todo.priority}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const audits = [
  {
    mem: "Shubham",
    action: "Commited a change to main.py file",
    time: "now",
  },
  {
    mem: "Sunny",
    action: "Created a new branch named 'dev'",
    time: "1now",
  }
  ,
  {
    mem: "Hunny",
    action: "Merged a pull request #1234 to main branch",
    time: "now",
  }
]

export function AuditTable (){
  return (
    <Table className='w-1/2 h-1/2'>
      <TableCaption>Audit log</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Member</TableHead>
          <TableHead>Action</TableHead>
          <TableHead className="text-right">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {audits.map((audit) => (
          <TableRow key={audit.mem}>
            <TableCell className="font-medium">{audit.mem}</TableCell>
            <TableCell>{audit.action}</TableCell>
            <TableCell className="text-right">{audit.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function ChatCard() {
  return (
    <Card className="w-auto h-1/2">
      <CardHeader>
        <CardTitle>Ai Chat</CardTitle>
        <CardDescription>Start a conversation with your team. Ask anything to git ai.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Chat content goes here */}
      </CardContent>
      <CardFooter>
        <input type="text" placeholder="Type your message..." />
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
}