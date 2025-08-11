"use client"

import { motion } from 'framer-motion';
import WelcomeMessage from '@/components/dashboard/welcome-message';
import StatCard from '@/components/dashboard/stat-card';
import { statCards } from '@/data/mock-data';

export default function Dashboard() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Welcome Message */}
        <div className="mb-8">
          <WelcomeMessage />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Additional Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { action: 'New user signed up', time: '2 minutes ago', type: 'user' },
                { action: 'Payment received', time: '1 hour ago', type: 'payment' },
                { action: 'Project updated', time: '3 hours ago', type: 'project' },
                { action: 'Support ticket closed', time: '5 hours ago', type: 'support' },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Add User', icon: '👤', color: 'bg-blue-500' },
                { title: 'Create Project', icon: '📁', color: 'bg-green-500' },
                { title: 'View Reports', icon: '📊', color: 'bg-purple-500' },
                { title: 'Settings', icon: '⚙️', color: 'bg-orange-500' },
              ].map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {action.title}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
