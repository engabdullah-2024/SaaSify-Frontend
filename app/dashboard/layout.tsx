"use client"

import { useState } from 'react';
import Navbar from '@/components/navigation/navbar';
import Sidebar from '@/components/navigation/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="pt-16 px-6 py-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
