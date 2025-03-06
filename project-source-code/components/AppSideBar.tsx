"use client";

import React from "react";
import Link from "next/link";

// Icons
import {
  Leaf,
  ChevronsUpDown,
  LogOut,
  Calculator,
  Home,
  Users,
  Award,
  type LucideIcon,
  Settings,
} from "lucide-react";

// Components (UI)
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Interfaces
interface Data {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  menuItems: {
    name: string;
    icon: LucideIcon;
    link: string;
  }[]; // Array of objects
}

// Data
const data: Data = {
  user: {
    name: "User Name",
    email: "user@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  menuItems: [
    {
      name: "Dashboard",
      icon: Home,
      link: "/dashboard",
    },
    {
      name: "Calculator",
      icon: Calculator,
      link: "/calculator",
    },
    {
      name: "Community",
      icon: Users,
      link: "/community",
    },
    {
      name: "Achievements",
      icon: Award,
      link: "/achievements",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, state} = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props} className="bg-sidebar text-sidebar-foreground" style={{ width: state === "collapsed" ? "5rem" : "auto" }}>
      <SidebarHeader className="p-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-emerald-500 text-sidebar-primary-foreground">
                <Leaf className="size-6" />
              </div>
              <div className={`grid flex-1 text-left text-2xl leading-tight ${state === "collapsed" ? "hidden" : ""}`}>
                <span className="truncate font-bold">EcoImpact</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="p-6">
        <SidebarMenu>
          {data.menuItems.map((item, index) => (
            <SidebarMenuItem key={index} className="mb-4">
              <SidebarMenuButton className="hover:bg-emerald-200 hover:text-sidebar-accent-foreground">
                <Link href={item.link} className="flex items-center gap-2 text-xl">
                  <item.icon className="size-6" />
                  <span className={`${state === "collapsed" ? "hidden" : ""}`}>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-10 w-10 rounded-lg">
                  <AvatarImage src={data.user.avatar} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className={`grid flex-1 text-left text-sm leading-tight ${state === "collapsed" ? "hidden" : ""}`}>
                  <span className="truncate font-semibold text-xl">{data.user.name}</span>
                  <span className="truncate text-sm">{data.user.email}</span>
                </div>
                <ChevronsUpDown className={`ml-auto size-4 ${state === "collapsed" ? "hidden" : ""}`} />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-xl">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src={data.user.avatar} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-xl">{data.user.name}</span>
                    <span className="truncate text-sm">{data.user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-xl">
                  <Settings className="size-5" />
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-xl">
                <LogOut className="size-5" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

