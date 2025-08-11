"use client"

import { motion } from 'framer-motion';


interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
}

export default function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-4">
        <span className={`text-lg font-medium transition-colors duration-200 ${
          !isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
        }`}>
          Monthly
        </span>
        
        <motion.button
          onClick={() => onToggle(!isYearly)}
          className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-6 h-6 bg-white dark:bg-gray-300 rounded-full shadow-md"
            animate={{
              x: isYearly ? 32 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        </motion.button>
        
        <span className={`text-lg font-medium transition-colors duration-200 ${
          isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
        }`}>
          Yearly
        </span>
        
        {/* Save Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isYearly ? 1 : 0,
            scale: isYearly ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
          className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium"
        >
          Save 20%
        </motion.div>
      </div>
    </div>
  );
}
