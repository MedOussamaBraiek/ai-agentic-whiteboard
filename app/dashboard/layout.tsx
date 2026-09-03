import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div>{children}</div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
