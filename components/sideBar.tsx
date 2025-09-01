import { Calendar, Inbox, LayoutDashboard, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
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
      <SidebarContent className="bg-white border-0">
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
            <SidebarMenu className="mt-10 ml-2 gap-5">
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
    </Sidebar>
  );
}
