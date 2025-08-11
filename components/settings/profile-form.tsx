"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Save } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
}

export default function ProfileForm() {
  const [formData, setFormData] = useState<FormData>({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Product manager with 5+ years of experience in SaaS and technology.'
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const inputFields = [
    { key: 'name', label: 'Full Name', icon: User, type: 'text' },
    { key: 'email', label: 'Email Address', icon: Mail, type: 'email' },
    { key: 'phone', label: 'Phone Number', icon: Phone, type: 'tel' },
    { key: 'location', label: 'Location', icon: MapPin, type: 'text' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Profile Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Update your personal information and preferences
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputFields.map((field) => {
            const Icon = field.icon;
            const isFocused = focusedField === field.key;
            
            return (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {field.label}
                </label>
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: isFocused ? 1.05 : 1,
                      y: isFocused ? -2 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  >
                    <Icon 
                      className={`w-5 h-5 transition-colors duration-200 ${
                        isFocused 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-400 dark:text-gray-500'
                      }`} 
                    />
                  </motion.div>
                  <input
                    type={field.type}
                    value={formData[field.key as keyof FormData]}
                    onChange={(e) => handleInputChange(field.key as keyof FormData, e.target.value)}
                    onFocus={() => setFocusedField(field.key)}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg transition-all duration-200 focus:outline-none ${
                      isFocused
                        ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
                    }`}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bio Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative"
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bio
          </label>
          <motion.textarea
            animate={{
              scale: focusedField === 'bio' ? 1.02 : 1,
            }}
            transition={{ duration: 0.2 }}
            value={formData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            onFocus={() => setFocusedField('bio')}
            onBlur={() => setFocusedField(null)}
            rows={4}
            className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:outline-none resize-none ${
              focusedField === 'bio'
                ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
            }`}
            placeholder="Tell us about yourself..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex justify-end"
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
