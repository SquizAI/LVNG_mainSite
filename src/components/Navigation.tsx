'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Technology', href: '/#technology' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-card backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-30 animate-pulse-slow"></div>
            </div>
            <span className="text-2xl font-bold text-gradient">LVNG.ai</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Desktop CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-4"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800/50"
              href="/get-started"
            >
              Get Started
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              href="/consultation"
            >
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card border-t border-gray-800/50"
          >
            <div className="container-width py-6">
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-white hover:bg-gray-800/50 justify-center"
                    href="/get-started"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg justify-center"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                    href="/consultation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 