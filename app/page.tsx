import { AppSidebar } from "@/components/sideBar";
import StatsOverview from "@/components/statsOverview";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#f4f7fd]">
        {/* Fixed Header */}
        <header className="">
          <div className="flex items-center justify-between px-6 md:px-12 py-4">
            <h1 className="text-xl font-semibold text-gray-800">
              Hello Evano <span className="inline-block">👋</span>
            </h1>
            <div className="relative w-48 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border-none bg-white pl-10 pr-4 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white
                     placeholder:text-gray-400 transition-all duration-200"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex items-center justify-center p-6">
          <StatsOverview />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
