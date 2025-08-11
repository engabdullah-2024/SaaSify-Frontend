"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dark Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Switch between light and dark themes
            </p>
          </div>
        </div>
        <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1">
          <div className="w-6 h-6 bg-white dark:bg-gray-300 rounded-full shadow-md" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Dark Mode
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Switch between light and dark themes
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-200 ${
          theme === 'dark' 
            ? 'bg-blue-600' 
            : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <motion.div
          className="w-6 h-6 bg-white dark:bg-gray-300 rounded-full shadow-md"
          animate={{
            x: theme === 'dark' ? 32 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </motion.button>
    </div>
  );
}
