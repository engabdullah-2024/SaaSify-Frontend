"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/footer';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  Clock
} from 'lucide-react';

export default function AnalyticsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    {
      id: 1,
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Active Users",
      value: "2,847",
      change: "+8.2%",
      changeType: "positive",
      icon: Users,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.1%",
      changeType: "negative",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Avg. Session",
      value: "4m 32s",
      change: "+15.3%",
      changeType: "positive",
      icon: Clock,
      color: "from-orange-500 to-red-600"
    }
  ];

  const chartData = [
    { month: "Jan", revenue: 12000, users: 1800, conversion: 2.8 },
    { month: "Feb", revenue: 15000, users: 2100, conversion: 3.1 },
    { month: "Mar", revenue: 18000, users: 2400, conversion: 3.4 },
    { month: "Apr", revenue: 22000, users: 2800, conversion: 3.7 },
    { month: "May", revenue: 25000, users: 3200, conversion: 3.9 },
    { month: "Jun", revenue: 28000, users: 3600, conversion: 4.2 }
  ];

  const topPages = [
    { name: "Homepage", views: 12453, change: "+12.5%" },
    { name: "Pricing", views: 8921, change: "+8.2%" },
    { name: "Features", views: 6543, change: "+15.3%" },
    { name: "About", views: 4321, change: "-2.1%" },
    { name: "Contact", views: 2987, change: "+5.7%" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Analytics Dashboard
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Track your business performance with real-time insights and detailed metrics
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" ref={ref}>
          {/* Metrics Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      metric.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {metric.changeType === 'positive' ? (
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 mr-1" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {metric.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {metric.title}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Revenue Overview
                </h2>
                <BarChart3 className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {chartData.map((data, index) => (
                  <motion.div
                    key={data.month}
                    initial={{ height: 0 }}
                    animate={{ height: (data.revenue / 28000) * 256 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${data.revenue.toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                {chartData.map((data) => (
                  <span key={data.month}>{data.month}</span>
                ))}
              </div>
            </motion.div>

            {/* Users Chart */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  User Growth
                </h2>
                <LineChart className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {chartData.map((data, index) => (
                  <motion.div
                    key={data.month}
                    initial={{ height: 0 }}
                    animate={{ height: (data.users / 3600) * 256 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-purple-500 to-purple-600 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {data.users.toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                {chartData.map((data) => (
                  <span key={data.month}>{data.month}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Top Pages & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Pages */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Top Pages
                </h2>
                <Eye className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <motion.div
                    key={page.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <MousePointer className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{page.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{page.views.toLocaleString()} views</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${
                      page.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {page.change}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Activity
                </h2>
                <Activity className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-4">
                {[
                  { action: "New user signed up", time: "2 minutes ago", type: "user" },
                  { action: "Payment received", time: "15 minutes ago", type: "payment" },
                  { action: "Feature page viewed", time: "1 hour ago", type: "view" },
                  { action: "Support ticket created", time: "2 hours ago", type: "support" },
                  { action: "Email campaign sent", time: "3 hours ago", type: "email" }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'user' ? 'bg-green-500' :
                      activity.type === 'payment' ? 'bg-blue-500' :
                      activity.type === 'view' ? 'bg-purple-500' :
                      activity.type === 'support' ? 'bg-orange-500' : 'bg-gray-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
