"use client"

import { motion } from 'framer-motion';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/footer';
import ProfileForm from '@/components/settings/profile-form';
import DarkModeToggle from '@/components/settings/dark-mode-toggle';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Account{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Settings
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Manage your account settings and preferences
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {/* Profile Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ProfileForm />
            </motion.div>

            {/* Dark Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <DarkModeToggle />
            </motion.div>

            {/* Additional Settings Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Notification Settings */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🔔</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Notifications
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Manage your notification preferences
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Email notifications', enabled: true },
                    { label: 'Push notifications', enabled: false },
                    { label: 'SMS alerts', enabled: false },
                    { label: 'Weekly reports', enabled: true },
                  ].map((setting, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {setting.label}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                          setting.enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      >
                        <motion.div
                          className="w-4 h-4 bg-white rounded-full shadow-md"
                          animate={{
                            x: setting.enabled ? 24 : 0
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                          }}
                        />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Security
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Manage your account security
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Two-factor authentication', action: 'Enable' },
                    { label: 'Change password', action: 'Update' },
                    { label: 'Login history', action: 'View' },
                    { label: 'Active sessions', action: 'Manage' },
                  ].map((security, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {security.label}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                      >
                        {security.action}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Danger Zone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚠️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                    Danger Zone
                  </h3>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    Irreversible and destructive actions
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-200"
                >
                  Delete Account
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
