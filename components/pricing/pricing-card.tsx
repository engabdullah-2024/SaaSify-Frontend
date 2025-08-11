"use client"

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { PricingPlan } from '@/types';

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  isSelected: boolean;
  onSelect: (planId: string) => void;
  index: number;
}

export default function PricingCard({ 
  plan, 
  isYearly, 
  isSelected, 
  onSelect, 
  index 
}: PricingCardProps) {
  const price = isYearly ? plan.yearlyPrice : plan.price;
  const displayPrice = isYearly ? plan.yearlyPrice / 12 : plan.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-blue-500 bg-white dark:bg-gray-900 shadow-2xl ring-4 ring-blue-500/20'
          : plan.popular
          ? 'border-purple-500 bg-white dark:bg-gray-900 shadow-xl'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-600'
      }`}
      onClick={() => onSelect(plan.id)}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
        >
          <Check className="w-5 h-5 text-white" />
        </motion.div>
      )}

      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </motion.div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {plan.name}
        </h3>
        <div className="mb-6">
          <motion.div
            key={price}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-baseline justify-center"
          >
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              ${displayPrice}
            </span>
            <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
          </motion.div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {isYearly ? `Billed annually ($${plan.yearlyPrice}/year)` : 'Billed monthly'}
        </p>
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.1 }}
            className="flex items-start space-x-3"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5"
            >
              <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
            </motion.div>
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            isSelected
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
              : plan.popular
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {isSelected ? 'Current Plan' : plan.popular ? 'Start Free Trial' : 'Get Started'}
        </button>
      </motion.div>
    </motion.div>
  );
}
