import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar/>
      <div className="flex min-h-screen">
        <Sidebar/>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}