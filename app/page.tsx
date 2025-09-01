import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


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
