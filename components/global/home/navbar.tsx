"use client";

import { cn } from "@/lib/utils";
import { ThemeToggler } from "../theme/toggler";
import { Logo } from "../logo";


export default function HomeNavbar() {
  return (
    <div className={cn(
        "z-50 bg-background dark:bg-muted fixed top-0 flex items-center w-full p-6"
    )}>
     <Logo />
     <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ThemeToggler />
     </div>
    </div>
  )
}
