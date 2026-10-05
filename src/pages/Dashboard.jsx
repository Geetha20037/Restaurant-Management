import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

import Overview from "./dashboard/Overview";
import Orders from "./dashboard/Orders";
import Reservations from "./dashboard/Reservations";
import Tables from "./dashboard/Tables";
import Menu from "./dashboard/Menu";
import Customers from "./dashboard/Customers";
import Analytics from "./dashboard/Analytics";
import Settings from "./dashboard/Settings";
import Profile from "./dashboard/Profile";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="lg:ml-72">
        <DashboardNavbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="orders" element={<Orders />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="tables" element={<Tables />} />
            <Route path="menu" element={<Menu />} />
            <Route path="customers" element={<Customers />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}