import { Calendar, Inbox, LayoutDashboard, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Product",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Customers",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Income",
    url: "#",
    icon: Search,
  },
  {
    title: "Promote",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-white no-sidebar-border">
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex flex-row mt-5 items-center gap-2 text-black">
              <Image
                src="/assets/icons/icon.png"
                alt="Dashboard"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className=" font-bold text-2xl leading-none">
                Dashboard
              </span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-10 gap-5">
              {items.map((item) => (
                <SidebarMenuItem className="text-[#9197B3]" key={item.title}>
                  <SidebarMenuButton
                    className="text-base hover:bg-[#5932EA] hover:text-[#ECEAFF] p-5 rounded-md cursor-pointer transition-colors duration-200"
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/assets/people/user.png"
            alt="Profile"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-black">Evano</span>
            <span className="text-xs text-gray-500">Project Manager</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
