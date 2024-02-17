"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SideBar from "./sidebar";
interface NavigationProps {
  children: React.ReactNode;
}


export default function Navigation({ children }: NavigationProps){
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] min-w-full max-w-lg rounded-lg border"
    >
      <ResizablePanel defaultSize={15} maxSize={20}>
        <div className="relative overflow-y-auto h-full p-3 bg-primary-foreground z-[50]">
          <SideBar />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={85}>
        <div className="flex h-full items-center justify-center p-6">
        {children}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}