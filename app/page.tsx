import { AppSidebar } from "@/components/sideBar";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function Home() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          
        </main>
      </SidebarProvider>
    </>
  );
}
