"use client"

import { motion } from 'framer-motion';
import { Sun, Coffee } from 'lucide-react';

export default function WelcomeMessage() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const getTimeIcon = () => {
    const hour = new Date().getHours();
    if (hour < 12) return Sun;
    return Coffee;
  };

  const TimeIcon = getTimeIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
    >
      <div className="flex items-center space-x-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
        >
          <TimeIcon className="w-8 h-8 text-white" />
        </motion.div>
        
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {getGreeting()}, User! 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 dark:text-gray-300"
          >
            Here's what's happening with your business today. Your dashboard is looking great!
          </motion.p>
        </div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 grid grid-cols-3 gap-4"
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Active Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">89%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">24</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
