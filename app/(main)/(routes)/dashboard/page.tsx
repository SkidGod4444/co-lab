"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/db/models/firebase.modals";
import { PartyPopper, PlusCircle } from "lucide-react";
import Image from "next/image";

export default function TeamsPage() {
  const User = useUser();
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/assets/empty.png"
        height="300"
        width="300"
        alt="img"
        className="dark:hidden"
      />
      <Image
        src="/assets/empty-dark.png"
        height="300"
        width="300"
        alt="img"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium flex items-center bg-primary-foreground rounded-md px-3 py-1">
        {User?.displayName ? (
          <div className="flex items-center">
            <PartyPopper className="h-6 w-6 mr-2" />
            Welcome to {User.displayName}&apos;s&nbsp;{" "}
            <span className="underline text-primary">CO-lab</span>
          </div>
        ) : (
          "Fetching..."
        )}
      </h2>
      <Button>
        <PlusCircle className="h-6 w-6 mr-2" />
        Create a team
      </Button>
    </div>
  );
}
