"use client"

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function TestDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-900 dark:text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Dark Mode Test
        </h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-900 dark:text-white">
              Current theme: <strong>{theme}</strong>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setTheme('light')}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Light Mode
            </button>
            <button
              onClick={() => setTheme('dark')}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            >
              Dark Mode
            </button>
            <button
              onClick={() => setTheme('system')}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              System
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Test Card 1
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                This card should change colors with the theme.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Test Card 2
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Another card to test dark mode styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
