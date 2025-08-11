"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/footer';
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp, 
  BarChart3,
  PieChart,
  LineChart,
  Filter,
  Search,
  Eye,
  Share2,
  Printer,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function ReportsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedReport, setSelectedReport] = useState('revenue');
  const [dateRange, setDateRange] = useState('30d');

  const reports = [
    {
      id: 'revenue',
      title: 'Revenue Report',
      description: 'Monthly revenue analysis and trends',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      data: { current: '$124,563', change: '+12.5%', trend: 'up' }
    },
    {
      id: 'users',
      title: 'User Analytics',
      description: 'User growth and engagement metrics',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      data: { current: '2,847', change: '+8.2%', trend: 'up' }
    },
    {
      id: 'performance',
      title: 'Performance Report',
      description: 'System performance and uptime metrics',
      icon: Activity,
      color: 'from-purple-500 to-pink-600',
      data: { current: '99.9%', change: '+0.1%', trend: 'up' }
    },
    {
      id: 'conversion',
      title: 'Conversion Report',
      description: 'Conversion rates and funnel analysis',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      data: { current: '3.24%', change: '-2.1%', trend: 'down' }
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

  const recentReports = [
    {
      id: 1,
      name: 'Q1 Revenue Analysis',
      type: 'Revenue',
      generated: '2 hours ago',
      status: 'completed',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'User Growth Report',
      type: 'Users',
      generated: '1 day ago',
      status: 'completed',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'Performance Metrics',
      type: 'Performance',
      generated: '3 days ago',
      status: 'completed',
      size: '3.1 MB'
    },
    {
      id: 4,
      name: 'Conversion Funnel',
      type: 'Conversion',
      generated: '1 week ago',
      status: 'completed',
      size: '2.7 MB'
    }
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

  const selectedReportData = reports.find(r => r.id === selectedReport);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Reports & Analytics
              </h1>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                Generate comprehensive reports and gain insights into your business performance
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" ref={ref}>
          {/* Report Types Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {reports.map((report) => {
              const Icon = report.icon;
              const isSelected = selectedReport === report.id;
              return (
                <motion.div
                  key={report.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => setSelectedReport(report.id)}
                  className={`cursor-pointer rounded-xl p-6 shadow-sm border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-white dark:bg-gray-800 border-emerald-500 shadow-lg' 
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${report.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      report.data.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {report.data.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 mr-1" />
                      )}
                      {report.data.change}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {report.description}
                  </p>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {report.data.current}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Filters and Actions */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export PDF
                </button>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Chart */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selectedReportData?.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {selectedReportData?.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Interactive chart for {selectedReportData?.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Chart data would be rendered here
                  </p>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                    <span>Current Period</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <span>Previous Period</span>
                  </div>
                </div>
                <span>Last updated: 2 minutes ago</span>
              </div>
            </motion.div>

            {/* Recent Reports */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Reports
                </h3>
                <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentReports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {report.name}
                      </h4>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{report.type}</span>
                      <span>{report.size}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {report.generated}
                      </span>
                      <div className="flex gap-1">
                        <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                          <Download className="w-3 h-3" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                          <Share2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Export Data</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CSV, Excel, PDF</p>
                </div>
              </button>
              
              <button className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Email Report</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Schedule delivery</p>
                </div>
              </button>
              
              <button className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Printer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Print Report</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">High quality print</p>
                </div>
              </button>
              
              <button className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Schedule Report</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Automated delivery</p>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
