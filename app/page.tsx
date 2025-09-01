import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function Home() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </>
  );
}
