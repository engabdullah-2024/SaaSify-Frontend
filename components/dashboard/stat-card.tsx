"use client"

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { StatCard as StatCardType } from '@/types';
import { 
  TrendingUp as TrendingUpIcon, 
  Users, 
  CreditCard, 
  Activity 
} from 'lucide-react';

interface StatCardProps {
  stat: StatCardType;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return TrendingUpIcon;
      case 'Users':
        return Users;
      case 'CreditCard':
        return CreditCard;
      case 'Activity':
        return Activity;
      default:
        return TrendingUpIcon;
    }
  };

  const Icon = getIcon(stat.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {stat.title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {stat.value}
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      
      <div className="mt-4 flex items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          className={`flex items-center text-sm font-medium ${
            stat.changeType === 'positive' 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {stat.changeType === 'positive' ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          {stat.change}
        </motion.div>
        <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
          from last month
        </span>
      </div>
    </motion.div>
  );
}
