import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100">
        <Outlet />
      </main>
    </div>
  );
}