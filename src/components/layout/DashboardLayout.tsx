import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
