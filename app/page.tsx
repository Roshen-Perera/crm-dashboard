import { AppSidebar } from "@/components/sideBar";
import StatsOverview from "@/components/statsOverview";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Search } from "lucide-react";


export default function Home() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full bg-[#f4f7fd] items-center">
          <div className="flex items-center justify-between px-12 py-4">
            <h1 className="text-xl font-semibold text-gray-800">
              Hello Evano <span className="inline-block">👋</span>,
            </h1>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-md border bg-white pl-10 pr-4 py-2 text-sm border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <StatsOverview />
        </main>
      </SidebarProvider>
    </>
  );
}
