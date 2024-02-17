interface UserSchema {
    id: string;
    name: string;
    email: string;
    gitToken: string;
    createdTeams?: TeamSchema[];
    joinedTeams?: TeamSchema[];
    adminTeams?: TeamSchema[];
    isOnline?: boolean;
    status?: string;
    createdAt: Date;
    updatedAt: Date;
}

interface MsgSchema {
    id: string;
    chatId: string;
    userId: string;
    content: string;
    isProblem?: boolean;
    isAnnouncement?: boolean;
    problemId?: string;
    solutionId?: string;
    isSolved?: boolean;
    isSolution?: boolean;
    createdAt: Date;
    updatedAt: Date;

}

interface ChatSchema {
    id: string;
    users: UserSchema[];
    teamId: string;
    messages: MsgSchema[];
    createdAt: Date;
    updatedAt: Date;

}

interface TodoSchema {
    id: string;
    content: string;
    userId: string;
    teamId: string;
    assignedTo?: UserSchema[];
    isDone?: boolean;
    isGoing?: boolean;
    isCancelled?: boolean;
    createdAt: Date;
    updatedAt: Date;

}

interface PullRequestSchema {
    id: string;
    userId: string;
    gitId: string;
    commitMsg: string;
    content: string;
    aiContent?: string;
    isMerged?: boolean;
    isRejected?: boolean;
    isPending?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

interface IssuesSchema {
    id: string;
    userId: string;
    gitId: string;
    content: string;
    aiContent?: string;
    isSolved?: boolean;
    isPending?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

interface DiscussionsSchema {
    id: string;
    userId: string;
    gitId: string;
    content: string;
    aiContent?: string;
    createdAt: Date;
    updatedAt: Date;
}

interface GitRepoSchema {
    id: string;
    userId: string;
    teamId: string;
    repoName: string;
    repoUrl: string;
    repoOwner: UserSchema;
    description?: string;
    isPrivate: boolean;
    contributors: string[];
    commits?: PullRequestSchema[];
    issues?: IssuesSchema[];
    discussions?: DiscussionsSchema[];
    createdAt: Date;
    updatedAt: Date;

}

interface TeamSchema {
    id: string;
    name: string;
    userId: string;
    teamOwner: UserSchema;
    teamAdmins: UserSchema[];
    isArchived: boolean;
    isPublic: boolean;
    gitRepos?: GitRepoSchema[];
    teamInviteLink?: string;
    parentOrg?: string | "teams";
    icon?: string;
    coverImg?: string;
    chats?: ChatSchema[];
    todos?: TodoSchema[];
    mems: UserSchema[];
    createdAt: Date;
    updatedAt: Date;
}